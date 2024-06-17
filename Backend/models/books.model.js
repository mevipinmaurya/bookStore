import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    },
    title: {
        type: String,
    },
})

const Book = mongoose.model("Book", bookSchema);
export default Book;