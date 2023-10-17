const  Book = require('../model/books')

exports.getBooks = async(req, res, next) =>{
    const books = await Book.find()
    try{
            res.status(200).json({
                books: books
        })
    }
    catch (err){
        console.log(err)
    }
}

exports.postBook = async(req, res, next) =>{
    title = req.body.title,
    author = req.body.author,
    year = req.body.year

    const book = await new Book({
        title: title,
        author: author,
        year: year
    })

    await book.save()
        try{
            res.status(201).json({
                message: "Book created",
                Book: {
                    title: book.title,
                    author: book.author,
                    year: book.year
                }
            })
        }
       catch(err){
            console.log(err)
        }
}

exports.editBook = (req, res, next) =>{

}

exports.deleteBook = (req, res, next) =>{

}


