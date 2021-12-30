
import repositoryContacts from "../../repository/contactsMethods/index";

const getContacts = async (req, res, next) => {
    const contacts = await repositoryContacts.listContacts()
    res.status(200).json({ contacts })
  }

  export default getContacts;