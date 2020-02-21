const express = require('express');
const router = express.Router();
//import from controller shop
const shopController = require('../controllers/shop');
router.get('/', shopController.getIndex);
//to retrive all book
router.get('/books', shopController.getBooks);
router.get('/books/:bookId', shopController.getBook);

//cart
router.get('/cart', shopController.getCart);
//orders
router.get('/order', shopController.getOrder);
module.exports = router;