var express = require('express');
var router = express.Router();

const books = [
    { id: 1, name: 'book1'},
    { id: 2, name: 'book2'},
    { id: 3, name: 'book3'},
]


router.get('/api/books', (req, res) => {
    res.json(books).end();
});

module.exports = router;
