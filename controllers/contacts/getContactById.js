
import repositoryContacts from "../../repository/contactsMethods/index";

const getContactById =  async (req, res, next) => {
  
    const {id} = req.params;
    const {id: userId} = req.user
    const contact = await repositoryContacts.getContactById(userId, id)
    if (contact) {
     return res.status(200).json(contact)
   }
  res.status(404).json({message: 'Not found'})
  }

  export default getContactById;