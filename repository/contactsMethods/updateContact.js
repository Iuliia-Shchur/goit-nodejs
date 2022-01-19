import Contact from '../../model/contacts/contact';


const updateContact = async (userId, contactId, body) => {
  
  const result = await Contact.findOneAndUpdate(
    {_id: contactId, owner: userId}, 
    {...body},
    {new: true},
    )
  return result
    
  }

  export default updateContact;
  