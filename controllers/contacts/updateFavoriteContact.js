
import repositoryContacts from "../../repository/contactsMethods/index";

const updateFavoriteContact = async (req, res, next) => {
 
    const {id} = req.params;
    const {id: userId} = req.user
    const contact = await repositoryContacts.updateContact(userId, id, req.body);
    if (contact) {
      return res.status(200).json(contact)
    }
   res.status(404).json({message: 'Not found'})
  }

  export default updateFavoriteContact;