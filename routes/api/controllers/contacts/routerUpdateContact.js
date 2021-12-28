import express from 'express'
import model from "../../../../model/contacts/index"
import { validateUpdate } from "../../../../middlewares/validation/contactsValidation";
const routerUpdateContact = express.Router()

routerUpdateContact.put('/:id', validateUpdate, async (req, res, next) => {
    const {id} = req.params;
    const contact = await model.updateContact(id, req.body);
    if (contact) {
      return res.status(200).json(contact)
    }
   res.status(404).json({message: 'Not found'})
  })

  export default routerUpdateContact;
