import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
const port = process.env.PORT || 5000;

connectDB(); // connect to the database
const app = express(); //initialize express
app.get('/', (req, res) => {
  res.send('API is Running....');
});

app.get('/api/products', (req, res) => {
  res.send(products); // get all products
});

// get the products by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: 'Product Not Found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
