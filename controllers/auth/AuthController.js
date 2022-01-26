import AuthService from "../../service/auth";
const authService = new AuthService();

class AuthController {

    async registration (req, res, next) {
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

    async login (req, res, next) {
        const {email, password} = req.body
        const user = await authService.getUser(email,password)
        if (!user) {
            return res 
            .status(401)
            .json({status: 'error', code: '401', message: 'Not authorized'})
        }
    
        const token = authService.getToken(user)
        await authService.setToken(user.id, token)
      
        res.status(200).json({status: 'Unauthorized', code: '200', data: {token}})
      }

      async logout  (req, res, next)  {
        await authService.setToken(req.user.id, null)
        res.status(204).json({ status: 'No content', code: '200', data: {}})
      }



}

export default AuthController;