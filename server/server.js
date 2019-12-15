const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const Cart = require('./cart');
const inventory = require('./inventory');

const app = express();
const PORT = 1337;
let userCart = new Cart('');

app.use(session({
  secret: 'F98A3A2945EEE',
  resave: true,
  saveUninitialized: true,
}));
app.use(parser.json());
app.use('/', express.static(`${__dirname}/../public`));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/inventory', (req, res) => {
  res.send(inventory);
});

app.get('/cart', async (req, res) => {
  try {
    if (req.session.id === userCart.sId) {
      res.status(200).send(userCart);
    } else {
      userCart = await new Cart(req.session.id);
      res.status(200).send(userCart);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.post('/add', async (req, res) => {
  const { id, quantity } = req.body;
  try {
    await userCart.addItems(id, quantity);
    res.status(201).send(userCart);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
