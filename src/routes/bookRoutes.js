const express = require("express");
const booksRouter = express.Router();

function router(nav) {
    var books = [{
            title: "Tom and Jerry",
            author: "Joseph Barbera",
            genre: "Cartoon",
            published: "1949",
            Description: "Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry.",
            img: "tom-and-jerry-the-missing-mouse-DXM1G8.jpg"

        },


    ]
    booksRouter.get("/", (req, res) => {
        res.render("books", {
            nav,
            title: "Library",
            books
        });
    });
    booksRouter.get("/:i", (req, res) => {
        const i = req.params.i
        res.render("book", {
            nav,
            title: "Library",
            book: books[i]
        });
    });
    booksRouter.get('/add-books', (req, res) => {
        res.render('addbooks', {
            nav,
            title: 'Library'
        });
    });
    return booksRouter;
}
module.exports = router;