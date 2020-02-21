const express = require('express');
const router = express.Router();
//import form controller folder
const adminController = require('../controllers/admin');
//to render add-book.ejs with get method
router.get('/add-book', adminController.getAddBook);
// to exctute with post method
router.post('/add-book', adminController.postAddBook);
//to show all books with get method
router.get('/books', adminController.getBook)
module.exports = router;