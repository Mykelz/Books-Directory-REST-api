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

exports.getBook = async(req, res, next)=>{
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    res.status(200).json({
        Book: {
            title: book.title,
            author: book.author,
            year: book.year
        }
    })
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

exports.editBook = async(req, res, next) =>{
    const bookId = req.params.bookId;
    const title = req.body.title;
    const author = req.body.author;
    const year = req.body.year;
    try {
        const book = await Book.findById(bookId);
        book.title = title,
        book.author = author, 
        book.year = year

        const updatedBook = await book.save()
        res.status(201).json({
            message: "Book Updated Successfully",
            Book: updatedBook
        })
    }
    catch(err){
        console.log(err)
    }
}

exports.deleteBook = async (req, res, next) =>{
    const bookId = req.params.bookId;
    await Book.findByIdAndDelete(bookId);
    res.status(200).json({
        message: "Book deleted!"
    })
}


