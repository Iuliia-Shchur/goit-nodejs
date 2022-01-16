
import repositoryContacts from "../../repository/contactsMethods/index";

const addContact = async (req, res, next) => {
    const addedContact = await repositoryContacts.addContact(req.body)
    res.status(201).json(addedContact)
  }

  export default addContact;