import mongo from 'mongodb';
const MongoClient = mongo.MongoClient;
// Connection url
const url = 'mongodb://209.250.239.176/local';
// Database Name
const dbName = 'local';

interface twitterObj {
    _id: string;
    polarity: number;
    id: number;
    date: string;
    query: string;
    user: string;
    text: string;
}

let client: mongo.MongoClient;

export function connectClient() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (mongoError, mongoClient) => {
            if (mongoError) {
                reject(mongoError);
            } else {
                client = mongoClient;
                resolve();
            }
        });
    })
}

export function distinctUsers(): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
        const collection = client.db(dbName).collection("twitter");
        collection.distinct("user", {}, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}

export function mentionsUser(): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
        const collection = client.db(dbName).collection("twitter");
        collection.aggregate(
            [
              { $match: { text: /@\w*/ } },
              { $unwind: "$user" },
              { $group: { _id: "$user", number: { $sum: 1 } } },
              { $sort: { number: -1 } },
              { $limit: 10 }
            ]
          )
    })
}

export function mostActive(){
    return new Promise((resolve, reject) => {
        const collection = client.db(dbName).collection("twitter");
        collection.aggregate(
            [
              { $unwind: "$user" },
              { $group: { _id: "$user", number: { $sum: 1 } } },
              { $sort: { number: -1 } },
              { $limit: 10 }
            ]
          )
    })
    
}
