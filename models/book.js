const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');
class Book {
    constructor(imageUrl, title, author, publisher, price, description) {
        this.imageUrl = imageUrl;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.description = description;
    }
    save() {
        const db = getDb();
        return db.collection('books')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
    static fetchAll() {
        const db = getDb();
        return db.collection('books').find().toArray()
            .then(books => {
                return books;
            })
            .catch(err => {
                console.log(err);
            })
    }
    static findById(bookId) {
        const db = getDb();
        return db.collection('books').find({ _id: new mongodb.ObjectId(bookId) }).next()
            .then(book => {
                return book;
            })
            .catch(err => {
                console.log(err);
            })
    }
}
module.exports = Book;
