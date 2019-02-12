import express from 'express';
import bodyParser from 'body-parser'
import twitterRoute from './routes/twitterRoute';
import { connectClient } from './mongodbConnector'
import mongoose from 'mongoose'
const app = express();
app.use(bodyParser.json());

app.use('/twitter', twitterRoute)

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

let connection: mongoose.Connection;

app.listen(3000, async () => {
    try {
        await connectClient();
        //connection = await getConnection("mongodb://209.250.239.176/local");
        console.log('Twitter App listening on port 3000!');
    } catch (err) {
        console.error(err);
    }
});

export function getTwitter() {
    return connection.db.collection("twitter");
}