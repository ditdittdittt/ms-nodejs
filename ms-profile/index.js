const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

// ServicePort
const servicePort = 3003;

// DB Config
const dbConfig = {
    uri: 'mongodb://localhost:27017'
}

const connectionDb = async () => {
    const client = await MongoClient.connect(dbConfig.uri, { useNewUrlParser:true });

    return client.db('ms_arkav');
}


app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const dbMiddleware = async (req, res, next) => {
    if (!res.locals.db) {
        const db = await connectionDb();
        res.locals.db = db
    }
    next()
}

app.use(dbMiddleware);

// Read user-profile
app.get('/users/profile', async (req, res) => {
    const { db } = res.locals;
    const username = req.param('username');
    const result = await db.collection('users').find( { username: { $eq: username} } ).toArray();
    return res.status(200).send(result);
});

app.listen((servicePort), () => {
    console.log(`Server started on port`, servicePort);
});