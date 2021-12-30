
import repositoryContacts from "../../repository/contactsMethods/index";


const removeContact = async (req, res, next) => {
    const {id} = req.params;
    const contact = await repositoryContacts.removeContact(id);
    if (contact) {
      return res.status(200).json({message: 'Deleted!'})
     
    }
   res.status(404).json({message: 'Not found'})
  }

  export default removeContact;