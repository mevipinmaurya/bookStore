// const express = require('express');
// const app = express();
// const dotenv = require("dotenv");

// After ES module 'require' is no longer needed we can simply 'import'


import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';



import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express();

app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 3000


// MongoDb Connection
const URI = process.env.MONGODB_URI
// try {
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connection successfull");
// } catch (error) {
//     console.log("error", error);
// }


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(URI);
}

app.use(express.json())

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Listening on server ${PORT}`)
})