import express from 'express'
import model from "../../../../model/contacts/index"
import { validateCreate} from "../../../../middlewares/validation/contactValidation";
const routerAddContact = express.Router()

routerAddContact.post('/', validateCreate, async (req, res, next) => {
    const addedContact = await model.addContact(req.body)
    res.status(201).json(addedContact)
  })

  export default routerAddContact;