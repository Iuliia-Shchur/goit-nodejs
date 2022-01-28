import pkg from 'mongoose';
const { connect, connection } = pkg;


// const uri = "mongodb+srv://gioula:<password>@cluster0.umufs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const uri = process.env.URI_DB
if (uri === undefined) { throw new Error("My ATLAS_URI is undefined");}

const db = connect(uri, 
    { useNewUrlParser: true,
         useUnifiedTopology: true })

         
        // ====== Основные события =====
connection.on('connected', () => {
    console.log('Mongoose connected to DB');
})

connection.on('err', (err) => {
    console.log(`Mongoose connection error: ${err.message}`);
})

connection.on('disconnected', () => {
    console.log('Mongoose disconnected from DB');
})
// ======

process.on('SIGINT', async () => {
    connection.close()
    console.log('Connection DB closed')
    process.exit(1)

})

export default db;