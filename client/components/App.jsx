import React, { Component } from 'react';
import styled from 'styled-components';
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
  }

  componentDidMount() {
    this.getCart();
  }

  getInventory() {
    axios.get('/inventory').then((result) => {
      console.log(result.data);
      this.setState({ inventory: result.data });
    });
  }

  getCart() {
    axios.get('/cart').then((result) => {
      console.log(result.data);
      this.setState({ cart: result.data });
    });
  }

  // addItem(id, quantity) {
  //   axios.post('/add').then((result));
  // }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <Inventory />
        <Cart />
      </div>
    );
  }
}


export default App;
