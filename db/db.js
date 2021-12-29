import { MongoClient } from 'mongodb';


// const uri = "mongodb+srv://gioula:<password>@cluster0.umufs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const uri = process.env.URI_DB
if (uri === undefined) { throw new Error("My ATLAS_URI is undefined");}

const client = new MongoClient(uri, 
    { useNewUrlParser: true,
         useUnifiedTopology: true })
        

const db = client.connect()


process.on('SIGINT', async () => {
    const client = await db
    client.close()
    console.log('Connection DB closed')

})

export default db;