
import {ObjectId} from 'mongodb';
import db from '../../db/db';


const removeContact = async (contactId) => {
  const client = await db
    const collection = await client.db().collection('contacts')
    const id = ObjectId(contactId)
    const {value: result} = await collection.findOneAndDelete({_id: id})
    return result
  }
  export default removeContact;