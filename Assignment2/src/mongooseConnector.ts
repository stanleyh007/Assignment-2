import mongoose from "mongoose";
import Twitter from './models/Twitter'
import { getTwitter } from ".";


export function getConnection(url: string): Promise<mongoose.Connection> {
    return new Promise((resolve, reject) => {
        mongoose.connect(url);
        mongoose.connection.on('error', (err) => {
            reject(err);
        });
        mongoose.connection.on('open', () => {
            resolve(mongoose.connection);
        })
    });
}

export function findAllUniqueUsers() {
    return new Promise((resolve, reject) => {
        console.log("Attempting to find twitter collection!");
        mongoose.connection.db.collection("twitter", (err: any, collection: any) => {
            if (err) {
                reject(err);
                return;
            }
            console.log(`Found collection from twitter collection!`);
            console.log(collection);
            collection.find({}).toArray((err2: any, data: any) => {
                if (err2) {
                    reject(err2);
                } else {
                    resolve(data);
                }
            });
        });
        /*
        }).find().toArray((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
        */
    })
}

export function findSpecialOne() {
    return new Promise((resolve, reject) => {
        Twitter.find({user: "_TheSpecialOne_"}).exec((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

/*
        //@ts-ignore
        
    });
     
    return new Promise((resolve, reject) => {
        let cursor = getTwitter().find();
        cursor.toArray().then((val) => {
            resolve(val);
        }).catch((err) => {
            reject(err);
        });
    })
    */