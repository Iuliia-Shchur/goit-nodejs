
import repositoryContacts from "../../repository/contactsMethods/index";

const getContacts = async (req, res, next) => {
  const {id: userId} = req.user

    const contacts = await repositoryContacts.listContacts(userId)
    res.status(200).json({ contacts })
  }

  export default getContacts;