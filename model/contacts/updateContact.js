import fs from 'fs/promises';
import path from 'path';
import contacts from "../../db/contacts.json";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contactsPath = path.join(__dirname, "../../db", 'contacts.json');

const updateContact = async (contactId, body) => {
   
    const index = contacts.findIndex(contact => contact.id === contactId)
    if (index !== -1) {
      const allContacts = {id: contactId, ...contacts[index], ...body}
      contacts[index] = allContacts
      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
      return allContacts
    }
  }

  export default updateContact;
  