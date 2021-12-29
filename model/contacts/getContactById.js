import {ObjectId} from 'mongodb';
import db from '../../db/db';



const getContactById = async (contactId) => {
    const client = await db
    const collection = await client.db().collection('contacts')
    const id = ObjectId(contactId)
    const [result] = await collection.find({_id: id}).toArray()
    return result
    
   }

   export default getContactById;