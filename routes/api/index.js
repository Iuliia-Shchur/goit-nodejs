import express from "express";

import addContact from "../../controllers/contacts/addContact";
import removeContact from "../../controllers/contacts/removeContact";
import getContactById from "../../controllers/contacts/getContactById";
import getContacts from "../../controllers/contacts/getContacts";
import updateContact from "../../controllers/contacts/updateContact";
import updateFavoriteContact from "../../controllers/contacts/updateFavoriteContact";

import {validateCreate, validateUpdate, validateUpdateFavorite, validateId} from "../../middlewares/validation/contactsValidation";
import guard from "../../middlewares/guard";

const router = express.Router();

router.get("/", [guard], getContacts);
router.get("/:id", [guard, validateId], getContactById);
router.post("/", [guard, validateCreate], addContact);
router.delete("/:id", [guard, validateId], removeContact);
router.put("/:id", [guard, validateUpdate], updateContact);
router.patch("/:id/favorite", [guard, validateUpdateFavorite], updateFavoriteContact);

export default router;