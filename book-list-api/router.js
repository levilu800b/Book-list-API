var express = require('express');
var router = express.Router();

const books = require ('./booksController')

/* GET home page. */
router.put('/book/:id', books.update)
router.delete('/book/:id', books.delete)
router.get('/book/:id', books.show)
router.get('/books', books.index)
router.post('/book/create', books.create)

module.exports = router;