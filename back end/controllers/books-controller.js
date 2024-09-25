const book=require("../model/book");

const getAllBooks=async(req,res,next)=>{
    let books;
    try{
        books=await book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"no products found!!"});
    }else{
        return res.status(200).json({books});
    }
};

const addBooks=async(req,res,next)=>{
    let books;
    const {name,author,description,price,available,image} =req.body;
    try{
        books=new book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await books.save();
    }catch(err){
        console.log(err);

        if(!books){
            return res.status(500).json({message:"unable to add!!"});
        }else{
            return res.status(201).json({books});
        }
    }
};

const getById=async(req,res,next)=>{
    let books;
    const id=req.params.id;

    try{
        books=await book.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"No book found!!"});
    }else{
        return res.status(201).json({books});
    }
};

const updateBook=async(req,res,next)=>{
    const id=req.params.id;
    const {name,author,description,price,available,image} =req.body;
    let books;

    try{
        books=await book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        });
        books=await book.save();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"Unable to update!!"});
    }else{
        return res.status(200).json({books});
    }
};

const deleteBook=async(req,res,next)=>{
    const id=req.params.id;
    let books;

    try{
        books=await book.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"Unable to delete!!"});
    }else{
        return res.status(200).json({message:"product successfully deleted"});
    }
};

exports.getAllBooks=getAllBooks;
exports.addBooks=addBooks;
exports.getById=getById;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;