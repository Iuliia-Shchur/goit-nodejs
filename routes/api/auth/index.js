import express from "express";
// import {registration, login, logout} from "../../../controllers/auth";
import AuthController from "../../../controllers/auth/AuthController";
import {verifyUser, repeatEmailForVerifiedUser} from '../../../controllers/email/email'
import guard from '../../../middlewares/guard';

const authController = new AuthController();

const router = express.Router();

router.post("/registration", authController.registration);
router.post("/login", authController.login);
router.post("/logout", guard, authController.logout);
router.get("/verify/:token", verifyUser);
router.post("/verify", repeatEmailForVerifiedUser)




export default router;