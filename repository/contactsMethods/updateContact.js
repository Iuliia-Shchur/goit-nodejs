import Contact from '../../model/contacts/contact';


const updateContact = async (contactId, body) => {
  
  const result = await Contact.findByIdAndUpdate(
    contactId, 
    {...body},
    {new: true},
    )
  return result
    
  }

  export default updateContact;
  