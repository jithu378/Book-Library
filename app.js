const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/Book_Library")
.then(() => {
    console.log("DB connection successful");
})
.catch(() => {
    console.log("DB connection failed");
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})