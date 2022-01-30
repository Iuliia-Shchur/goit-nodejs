import repositoryUsers from '../../repository/users';
import {EmailService, SenderSendgrid} from '../../service/email';


const verifyUser = async (req, res, next) => {
const verifyToken = req.params.token
const userFromToken = await repositoryUsers.findByVerifiedToken(verifyToken)

if (userFromToken) {
await repositoryUsers.updateVerify(userFromToken.id, true)
return res
.status(200)
.json({status: 'success', code: '200', data: {message: 'Success'}})
}
res 
.status(404)
.json({status: 'error', code: '404', message: 'Invalid token'})

}

const repeatEmailForVerifiedUser = async (req, res, next) => {
    const {email} = req.body;
    const user = await repositoryUsers.findByEmail(email)
    if(user) {
        const {email, name, verifyTokenEmail} = user
        const emailService = new EmailService(process.env.NODE_ENV, new SenderSendgrid())
            
          const isSent = await emailService.sendVerifyEmail(email, name, verifyTokenEmail)

        if(isSent) {
           return res.status(200).json({
                status: 'success', 
                code: '200', 
                data: {message: "Verification email sent"},
              })
        }
        return res.status(422).json({
            status: 'success', 
            code: '422', 
            data: {message: "Unprocessable entity"},
          }) 
        }

         return res
        .status(404)
        .json({status: 'error', code: '404', data: {message: 'User not found'}})
}

export {
    verifyUser, repeatEmailForVerifiedUser
};