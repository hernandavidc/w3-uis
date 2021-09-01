const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/w3-intro', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Connected to mongoDB...'))
        .catch(err => console.log('Connect error: ', err));

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    price: Number,
    pages: Number,
    ISBN: String
});

const Book = mongoose.model('Book', bookSchema);

async function createBook(){
    const book = new Book({
        name: "Antes de los tiempos oscuros",
        author: "Un autor muy relevante",
        tags: ["Romantica", "Amor", "Colegio"],
        price: 17200,
        pages: 25,
        ISBN: "MXL-75413"
    });
    
    const result = await book.save();
    console.log(result);
}
// createBook();

async function listBooks(){
    //eq (equal)
    //ne (not equal)
    //gt (greater than)
    //gte (greater than or equal)
    //lt (less than)
    //lte (less than or equal)
    //in
    //non (not in)
    //or 
    //and
    const numPage = 1;
    const sizePage = 4;
    // api/usuarios?numPage=2&sizePage=2&sort=-1&category=14&subcategory=254
    // let querySort = {};
    // if(req.query.sort){
    //     querySort.name = req.query.sort
    // }
    let queryFind = {};
    // if(req.query.category){
    //     queryFind.category = req.query.category;
    // }
    // if(req.query.subcategory){
    //     queryFind.subcategory = req.query.subcategory;
    // }

    let books = await Book
                            //.find({ pages: 250 });
                            // .find({ price: { $gt: 50000, $lte: 150000 } });
                            // .find({ price: { $in: [ 25000, 3000, 90000] } });
                            // .find()
                            // .and([{ name: "Cien años de soledad"}, { price: 50000 }]);
                            // .find({ author: /^Herni/ });
                            // .find({ name: /.*de.* / })
                            .find(queryFind)
                            // .skip((numPage - 1) * sizePage)
                            // .limit(sizePage)
                            // .sort(querySort)
                            // .select({ name: 1, author: 1, tags: 1 });

     console.log(books);
}
listBooks();

async function updateBook(id){
    const _book = await Book.findById(id);
    if(!_book){
        console.log("Book not found");
        return;
    }
    // _book.set({
    //     name: "Codigo limpio v2.0",
    //     price: 200000
    // });
    // _book.price = 110000;
    // const book = await _book.save();

    const book = await Book.findByIdAndUpdate(id, {
        $set: {
            name: "Intro to Web dev",
            price: 5000
        }
    }, { new: true })
    console.log(book)
}
// updateBook('610c95f75513b421d86bcdc0');

async function deleteBook(id){
    // const result = await Book.deleteOne({ _id: id });
    const result = await Book.findByIdAndRemove(id);
    console.log(result);
}

// deleteBook('610c968413ce424a54128f06');