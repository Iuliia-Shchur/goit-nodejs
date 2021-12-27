import fs from 'fs/promises';
import path from 'path';
import contacts from "../../db/contacts.json";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contactsPath = path.join(__dirname, "../../db", 'contacts.json');

const removeContact = async (contactId) => {
    const index = contacts.findIndex(contact => contact.id === contactId)
   if(index !== -1) {
     const [contact] = contacts.splice(index, 1)
     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
     return contact
   }
   return null
  }
  export default removeContact;