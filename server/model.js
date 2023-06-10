const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  id: String,
  title: String,
  authors: [String],
  description: String,
  thumbnail: String,
  infoLink: String,
  status: {
    type: String,
    enum: ['initial', 'toread', 'reading', 'read'],
    default: 'initial',
  },
});

const Book = model('Book', bookSchema);

mongoose.connect(
  'mongodb+srv://chrisciolac:Etmw4tP7YL0EZEAU@cluster0.4krey03.mongodb.net/Cat-Books?retryWrites=true&w=majority'
);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

module.exports = Book;
