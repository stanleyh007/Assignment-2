import express, { Router } from 'express';
import {findAllUniqueUsers, findSpecialOne} from '../mongooseConnector'
import Twitter from '../models/Twitter'
import { distinctUsers } from '../mongodbConnector';
const router = express.Router();

router.get('/', (req, res) => {
    console.log(`Calling bingo()`);
    
    
})

router.get('/getAllUsers', (req, res) => {
    findAllUniqueUsers().then((r) => {
        res.json(r);
    }).catch((err) => {
        res.json(err);
    })
})

router.get('/special', (req, res) => {
    findSpecialOne().then((r) => {
        res.json(r);
    }).catch((err) => {
        res.json(err);
    })
})


export default router;

