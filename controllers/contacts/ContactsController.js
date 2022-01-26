import repositoryContacts from "../../repository/contactsMethods/index";

class ContactsController {

    async getContacts (req, res, next) {
        const {id: userId} = req.user
      
          const contacts = await repositoryContacts.listContacts(userId)
          res.status(200).json({ contacts })
        }

        async addContact (req, res, next) {
            const {id: userId} = req.user
              const addedContact = await repositoryContacts.addContact(userId, req.body)
              res.status(201).json(addedContact)
        }

        async getContactById (req, res, next) {
  
            const {id} = req.params;
            const {id: userId} = req.user
            const contact = await repositoryContacts.getContactById(userId, id)
            if (contact) {
             return res.status(200).json(contact)
           }
          res.status(404).json({message: 'Not found'})
          }

          async removeContact (req, res, next) {
  
            const {id} = req.params;
            const {id: userId} = req.user
            const contact = await repositoryContacts.removeContact(userId, id);
            if (contact) {
              return res.status(200).json({message: 'Deleted!'})
             
            }
           res.status(404).json({message: 'Not found'})
          }

          async updateContact (req, res, next) {
 
            const {id} = req.params;
            const {id: userId} = req.user
            const contact = await repositoryContacts.updateContact(userId, id, req.body);
            if (contact) {
              return res.status(200).json(contact)
            }
           res.status(404).json({message: 'Not found'})
          }

         async updateFavoriteContact (req, res, next) {
 
            const {id} = req.params;
            const {id: userId} = req.user
            const contact = await repositoryContacts.updateContact(userId, id, req.body);
            if (contact) {
              return res.status(200).json(contact)
            }
           res.status(404).json({message: 'Not found'})
          }


}

export default ContactsController;