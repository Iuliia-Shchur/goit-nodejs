import AuthService from "../../service/auth";
const authService = new AuthService();

const registration = async (req, res, next) => {
const {email} = req.body;
const isUserExist = await authService.isUserExist(email)

if (isUserExist) {
    return res 
    .status(409)
    .json({status: 'Conflict', code: '409', message: 'Email in use'})
}

const data = await authService.create(req.body)
res.status(200).json({status: 'success', code: '200', data})
    
  }

  export default registration;