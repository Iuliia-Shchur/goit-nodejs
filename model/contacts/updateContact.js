
import {ObjectId} from 'mongodb';
import db from '../../db/db';


const updateContact = async (contactId, body) => {
  const client = await db
  const collection = await client.db().collection('contacts')
  const id = ObjectId(contactId)
  const {value: result} = await collection.findOneAndUpdate(
    {_id: id}, 
    {$set: body},
    )
  return result
    
  }

  export default updateContact;
  