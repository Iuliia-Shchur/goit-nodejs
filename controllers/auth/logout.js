import AuthService from "../../service/auth";
const authService = new AuthService();

const logout = async (req, res, next) => {
    await authService.setToken(req.user.id, null)
    res.status(204).json({ status: 'No content', code: '200', data: {}})
  }

  export default logout;