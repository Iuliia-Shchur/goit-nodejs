import Contact from '../../model/contacts/contact';

const addContact = async (body) => {
 
  const result = await Contact.create(body)
  return result
  }

  export default addContact;