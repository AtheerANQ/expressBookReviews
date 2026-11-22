const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/', async function (req, res) {
  try {
    const response = await axios.get('http://localhost:5000/books');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({message: "Error fetching books"});
  }
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
  try {
    const response = await axios.get('http://localhost:5000/books');
    const book = response.data[req.params.isbn];
    if (book) return res.status(200).json(book);
    return res.status(404).json({message: "Book not found"});
  } catch (error) {
    return res.status(500).json({message: "Error fetching book"});
  }
});

// Get book details based on author
public_users.get('/author/:author', async function (req, res) {
  try {
    const response = await axios.get('http://localhost:5000/books');
    const result = Object.values(response.data).filter(b => b.author === req.params.author);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({message: "Error fetching books"});
  }
});

// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
  try {
    const response = await axios.get('http://localhost:5000/books');
    const result = Object.values(response.data).filter(b => b.title === req.params.title);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({message: "Error fetching books"});
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
