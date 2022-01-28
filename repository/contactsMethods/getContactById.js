
import Contact from '../../model/contacts/contact';



const getContactById = async (userId, contactId) => {
   
    const result = await Contact.findOne({
        _id: contactId, 
        owner: userId,
    }).populate({
        path: 'owner',
        select: 'name email',
      })
    return result
    
   }

   export default getContactById;