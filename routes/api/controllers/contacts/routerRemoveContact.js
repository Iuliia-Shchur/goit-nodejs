import express from 'express'
import model from "../../../../model/contacts/index"

const routerRemoveContact = express.Router()

routerRemoveContact.delete('/:id', async (req, res, next) => {
    const {id} = req.params;
    const contact = await model.removeContact(id);
    if (contact) {
      // return res.status(200).json({message: 'Deleted!'})
      return res.status(200).json({contact})
    }
   res.status(404).json({message: 'Not found'})
  })

  export default routerRemoveContact;