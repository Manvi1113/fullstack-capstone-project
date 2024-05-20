const { MongoClient } = require('mongodb');

async function connectToDatabase() {
    const url = 'mongodb://root:MTk3MDgtbWFudmln@localhost:27017';
    const dbName = 'giftDB';

    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    // Task 1: Connect to MongoDB
    await client.connect();

    // Task 2: Connect to the database and store in variable dbInstance
    const dbInstance = client.db(dbName);

    // Task 3: Return the dbInstance
    return dbInstance;
}

module.exports = connectToDatabase;
