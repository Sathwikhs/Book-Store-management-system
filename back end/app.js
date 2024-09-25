const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://sathwikhs235:8ULKCveEJb7fwrr2@cluster0.fsoq9.mongodb.net/bookstoreretryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));