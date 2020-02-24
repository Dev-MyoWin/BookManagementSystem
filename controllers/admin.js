const Book = require('../models/book');
const mongodb = require('mongodb');
exports.getAddBook = (req, res, next) => {
    res.render('admin/book-form.ejs',
        {
            pageTitle: "Add book",
            path: "/admin/book-form",
            editing: false,
        });

};
exports.postAddBook = (req, res, next) => {
    const imageUrl = req.body.imageUrl;
    const title = req.body.title;
    const author = req.body.author;
    const publisher = req.body.publisher;
    const price = req.body.price;
    const description = req.body.description;
    const books = new Book(imageUrl, title, author, publisher, price, description);
    books.save()
        .then(result => {
            console.log(result);
            res.redirect('/admin/books');
        })
        .catch(err => {
            console.log(err);
        });

};

exports.getBook = (req, res, next) => {
    Book.fetchAll()
        .then(books => {
            res.render('admin/books.ejs',
                {
                    pageTitle: "Book List",
                    path: "/admin/books",
                    books: books
                })
        })
        .catch(err => {
            console.log(err)
        })

};
exports.postDeleteBook = (req, res, next) => {
    const bookId = req.body.bokId;
    Book.deleteById(bookId)
        .then(() => {
            console.log("Delete Successful")
            res.redirect("/admin/books")
        })
        .catch(err => {
            console.log(err)
        })
}
exports.getEditBook = (req, res, next) => {
    const bookId = req.params.bokId;
    const editMode = req.query.edit;
    Book.findById(bookId)
        .then(book => {
            res.render('admin/book-form.ejs', {
                pageTitle: "Edit Book",
                path: "/admin/edit-book",
                book: book,
                editing: editMode
            })
        })
        .catch(err => {
            console.log(err);
        })

}
exports.postEditBook = (req, res, next) => {
    const bookId = req.body.bokId;
    const updatedImageUrl = req.body.imageUrl;
    const updatedTitle = req.body.title;
    const updatedAuthor = req.body.author;
    const updatedPublisher = req.body.publisher;
    const updatedPrice = req.body.price;
    const updatedDec = req.body.description;
    const book = new Book(updatedImageUrl, updatedTitle, updatedAuthor, updatedPublisher, updatedPrice, updatedDec, new mongodb.ObjectId(bookId));
    book.save()
        .then(() => {
            console.log("updated successful");
            res.redirect('/admin/books');
        })
        .catch(err => {
            console.log(err);
        });

}