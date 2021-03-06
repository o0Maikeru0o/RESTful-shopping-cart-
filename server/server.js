const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const Cart = require('./cart');
const inventory = require('./inventory');

const app = express();
const PORT = 1337;
const carts = {};

app.use(session({
  // In production the secret should be placed in a .env and not made public
  secret: 'MmgRVrlCdHoV9Jzz9y3TQMY9iNkeUR68',
  resave: true,
  saveUninitialized: true,
}));
app.use(parser.json());
app.use('/', express.static(`${__dirname}/../public`));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/inventory', (req, res) => {
  try {
    res.status(200).send(inventory);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.get('/cart', (req, res) => {
  try {
    res.status(200).send(carts[req.session.id]);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.post('/create', async (req, res) => {
  try {
    if (carts[req.session.id]) {
      res.redirect('/cart');
    } else {
      carts[req.session.id] = await new Cart(req.session.id);
      res.status(201).send(carts[req.session.id]);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.post('/add', async (req, res) => {
  const { id, quantity } = req.body;
  try {
    if (!carts[req.session.id]) {
      carts[req.session.id] = await new Cart(req.session.id);
    }
    await carts[req.session.id].addToCart(id, quantity);
    res.status(201).send(carts[req.session.id]);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.delete('/clear', (req, res) => {
  try {
    delete carts[req.session.id];
    res.status(202).send('Cart cleared');
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
