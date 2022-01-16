
import Contact from '../../model/contacts/contact';



const listContacts = async () => {
   
   const result = await Contact.find()
   return result
     }

export default listContacts;
     
   