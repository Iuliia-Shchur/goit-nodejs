import contacts from "../../db/contacts.json";


const getContactById = async (contactId) => {
     
    const [contact] = await contacts.filter(contact => contact.id.toString() === contactId)
    console.log(contact);
    return contact
   }

   export default getContactById;