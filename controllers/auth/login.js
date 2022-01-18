import AuthService from "../../service/auth";
const authService = new AuthService();

const login = async (req, res, next) => {
    const {email, password} = req.body
    const user = await authService.getUser(email,password)
    if (!user) {
        return res 
        .status(401)
        .json({status: 'error', code: '401', message: 'Not authorized'})
    }

    const token = authService.getToken(user)
    await authService.setToken(user.id, token)
  
    res.status(200).json({status: 'success', code: '200', data: {token}})
  }

  export default login;