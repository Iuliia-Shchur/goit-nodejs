
import repositoryContacts from "../../repository/contactsMethods/index";

const updateContact = async (req, res, next) => {
    const {id} = req.params;
    const contact = await repositoryContacts.updateContact(id, req.body);
    if (contact) {
      return res.status(200).json(contact)
    }
   res.status(404).json({message: 'Not found'})
  }

  export default updateContact;