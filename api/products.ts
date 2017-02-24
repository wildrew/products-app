import * as express from 'express';
import Database from '../db';

let router = express.Router();

//get products
router.get('/', (req, res) => {
  Database.db.collection('products').find().toArray().then((products) => {
    res.json(products);
  })
});

export default router;
