// db.js
require('dotenv').config();


// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;


async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);

    
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;
