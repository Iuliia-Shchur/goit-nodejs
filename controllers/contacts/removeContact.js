
import repositoryContacts from "../../repository/contactsMethods/index";


const removeContact = async (req, res, next) => {
  
    const {id} = req.params;
    const {id: userId} = req.user
    const contact = await repositoryContacts.removeContact(userId, id);
    if (contact) {
      return res.status(200).json({message: 'Deleted!'})
     
    }
   res.status(404).json({message: 'Not found'})
  }

  export default removeContact;