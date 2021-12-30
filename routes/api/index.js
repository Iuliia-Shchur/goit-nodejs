import express from "express";

import addContact from "../../controllers/contacts/addContact";
import removeContact from "../../controllers/contacts/removeContact";
import getContactById from "../../controllers/contacts/getContactById";
import getContacts from "../../controllers/contacts/getContacts";
import updateContact from "../../controllers/contacts/updateContact";
import updateFavoriteContact from "../../controllers/contacts/updateFavoriteContact";

import {validateCreate, validateUpdate, validateUpdateFavorite, validateId} from "../../middlewares/validation/contactsValidation";

const router = express.Router();

router.get("/", getContacts);
router.get("./:id", validateId, getContactById);
router.post("/", validateCreate, addContact);
router.delete("/:id", validateId, removeContact);
router.put("/:id", validateUpdate, updateContact);
router.patch("/:id/favorite", validateUpdateFavorite, updateFavoriteContact);

export default router;