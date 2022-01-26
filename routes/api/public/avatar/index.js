import express from "express";
import guard from "../../../../middlewares/guard";
import {upload} from '../../../../middlewares/upload';
import uploadAvatar from "../../../../controllers/upload/uploadController";


const router = express.Router();

router.patch("/", guard, upload.single("avatar"), uploadAvatar);


export default router;