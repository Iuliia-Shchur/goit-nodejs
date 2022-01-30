import findById from "./findById";
import findByEmail from "./findByEmail";
import create from "./create";
import updateToken from "./updateToken";
import updateAvatar from "./updateAvatar";
import findByVerifiedToken from './findByVerifiedToken';
import updateVerify from './updateVerify'



const Users = {findById, findByEmail, create, updateToken, updateAvatar, findByVerifiedToken, updateVerify}; 
export default Users;