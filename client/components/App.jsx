import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
// import Cart from './Cart';
import Inventory from './Inventory';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      cart: {},
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get('/inventory').then((result) => {
      this.setState({ inventory: result.data });
    })
      .catch((err) => console.log(err));
  }

  getCart() {
    axios.get('/cart').then((result) => {
      this.setState({ cart: result.data });
    })
      .catch((err) => console.log(err));
  }

  addToCart(id, quantity) {
    axios.post('/add', { id, quantity }).then((result) => {
      this.setState({ cart: result.data });
    })
      .catch((err) => console.log(err));
  }

  render() {
    const { cart, inventory } = this.state;

    return (
      <Inventory inventory={inventory} addToCart={this.addToCart} />
    );
  }
}


export default App;
