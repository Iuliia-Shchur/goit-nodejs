
import Contact from '../../model/contacts/contact';



const listContacts = async (userId) => {
   
   const result = await Contact.find({owner: userId}).populate({
     path: 'owner',
     select: 'name email',
   })
   return result
     }

export default listContacts;
     
   