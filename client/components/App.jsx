import React, { Component } from 'react';
import axios from 'axios';
import Cart from './Cart';
import Inventory from './Inventory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      cart: {},
    };
    this.addToCart = this.addToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount() {
    this.getInventory();
    this.getCart();
  }

  getInventory() {
    axios.get('/inventory')
      .then((result) => {
        this.setState({ inventory: result.data });
      })
      .catch((err) => console.log(err));
  }

  getCart() {
    axios.get('/cart')
      .then((result) => {
        this.setState({ cart: result.data });
      })
      .catch((err) => console.log(err));
  }

  addToCart(id, quantity) {
    axios.post('/add', { id, quantity })
      .then((result) => {
        this.setState({ cart: result.data });
      })
      .catch((err) => console.log(err));
  }

  clearCart() {
    axios.delete('/clear')
      .then((result) => { if (result.status === 202) this.setState({ cart: {} }); })
      .catch((err) => console.log(err));
  }

  render() {
    const { cart, inventory } = this.state;

    return (
      <>
        <Inventory inventory={inventory} addToCart={this.addToCart} />
        <Cart cart={cart} clearCart={this.clearCart} />
      </>
    );
  }
}


export default App;
