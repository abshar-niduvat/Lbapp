const express = require("express");
const authorsRouter = express.Router();

function router(nav) {
    var authors = [{
            author: "Joseph Barbera",
            book: 'Tom and Jerry',
            details: 'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.',
            img: "Joseph.jpg"

        },


    ]
    authorsRouter.get("/", (req, res) => {
        res.render("authors", {
            nav,
            title: "Library",
            authors
        });
    });
    authorsRouter.get("/:i", (req, res) => {
        const i = req.params.i
        res.render("author", {
            nav,
            title: "Library",
            author: authors[i]
        })
    })
    return authorsRouter;
}
module.exports = router;