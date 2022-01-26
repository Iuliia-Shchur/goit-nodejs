import express from "express";
// import {registration, login, logout} from "../../../controllers/auth";
import AuthController from "../../../controllers/auth/AuthController";
import guard from '../../../middlewares/guard';

const authController = new AuthController();

const router = express.Router();

router.post("/registration", authController.registration);
router.post("/login", authController.login);
router.post("/logout", guard, authController.logout);


export default router;