const fs = require("fs")

fs.readFile("./oddisey.txt", "utf8", function (err, data) {
    console.log("callback 1 lanzado")
    functionEdu(data)
})

fs.readFile("./short.txt", "utf8", function (err, data) {
    console.log("callback 2 lanzado")
    functionEdu(data)
})

console.log("Hola chicos, soy síncrono")

var books = [];

function functionEdu(data) {
    books.push(data);

    if (books.length === 2) {
        console.log("the books are ready");
        console.log(books[0].length)
        // books[0].forEach(function (word) {

        // })
    }
}

//code
//code
//code
//code
//code
//code
//code
//code