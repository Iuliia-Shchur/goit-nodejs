
import Contact from '../../model/contacts/contact';



const getContactById = async (contactId) => {
   
    const result = await Contact.findById(contactId)
    return result
    
   }

   export default getContactById;