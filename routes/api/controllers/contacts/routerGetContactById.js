import express from 'express'
import model from "../../../../model/contacts/index"

const routerGetContactById = express.Router()

routerGetContactById.get('/:id', async (req, res, next) => {
    const {id} = req.params;
    const contact = await model.getContactById(id)
    if (contact) {
     return res.status(200).json(contact)
   }
  res.status(404).json({message: 'Not found'})
  })

  export default routerGetContactById;