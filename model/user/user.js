import pkg from 'mongoose';
import {randomUUID} from "crypto";
import bcrypt from 'bcryptjs';
import gravatar from 'gravatar';

const { Schema, model } = pkg;

const userSchema = new Schema(  {
    name: {
        type: String,
        default: 'Guest',
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate(value) {
            const re = /\S+@\S+\.\S+/
            return re.test(String(value).trim().toLocaleLowerCase())
        },
      },
      subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
      },
      token: {
        type: String,
        default: null,
      },
      avatar: {
        type: String,
        default: function() {
          return gravatar.url(this.email, {s: '250'}, true)
        },
      },
      idAvatarCloud: {
        type: String,
        default: null,

      },
      isVerify: { 
        type: Boolean, 
        default: false
      },
      verifyTokenEmail: {
        type: String,
        default: randomUUID(),
      },
  }, 
  {
      versionKey: false, 
      timestamps: true
    },
    )

 userSchema.pre('save', async function (next) {
     if (this.isModified('password')) {
         const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
     }
     next()
 })

userSchema.methods.isValidPassword = async function (password) {
   return await bcrypt.compare(password, this.password) 
}



const User = model('user', userSchema)

export default User;