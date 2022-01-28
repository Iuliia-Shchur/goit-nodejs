import express from "express";
import ContactsController from "../../controllers/contacts/ContactsController";

import {validateCreate, validateUpdate, validateUpdateFavorite, validateId} from "../../middlewares/validation/contactsValidation";
import guard from "../../middlewares/guard";

const contactsController = new ContactsController();

const router = express.Router();

router.get("/", [guard], contactsController.getContacts);
router.get("/:id", [guard, validateId], contactsController.getContactById);
router.post("/", [guard, validateCreate], contactsController.addContact);
router.delete("/:id", [guard, validateId], contactsController.removeContact);
router.put("/:id", [guard, validateUpdate], contactsController.updateContact);
router.patch("/:id/favorite", [guard, validateUpdateFavorite], contactsController.updateFavoriteContact);

export default router;