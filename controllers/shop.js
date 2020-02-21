const Book = require('../models/book');
exports.getIndex = (req, res, next) => {
    Book.fetchAll()
        .then(books => {
            res.render('shop/index.ejs', {
                pageTitle: "Shop",
                path: "/",
                books: books
            })
        })
        .catch(err => {
            console.log(err);
        })
}
exports.getBooks = (req, res, next) => {
    Book.fetchAll()
        .then(books => {
            res.render('shop/book-list.ejs', {
                pageTitle: "All Books",
                path: "/books",
                books: books
            })
        })
        .catch(err => {
            console.log(err);
        })


}
exports.getBook = (req, res, next) => {
    const bookId = req.params.bookId;// to call prameter use "params"
    Book.findById(bookId)
        .then(book => {
            res.render('shop/book-detail.ejs', {
                pageTitle: "Book Detail",
                path: "/books",
                book: book
            });
        })
        .catch(err => {
            console.log(err)
        })
};
exports.getCart = (req, res, next) => {
    res.render('shop/cart.ejs', {
        pageTitle: "Cart",
        path: "/cart"
    }
    )
}
exports.getOrder = (req, res, next) => {
    res.render('shop/orders.ejs', {
        pageTitle: "Order",
        path: "/order"
    }
    )
}