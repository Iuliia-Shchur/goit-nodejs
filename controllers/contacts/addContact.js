
import repositoryContacts from "../../repository/contactsMethods/index";

const addContact = async (req, res, next) => {
  const {id: userId} = req.user
    const addedContact = await repositoryContacts.addContact(userId, req.body)
    res.status(201).json(addedContact)
  }

  export default addContact;