
import Contact from '../../model/contacts/contact';


const removeContact = async (contactId) => {
  
    const result = await Contact.findByIdAndRemove(contactId)
    return result
  }
  export default removeContact;