import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import Cart from './Cart';
import Item from './Item';
// import Inventory from './Inventory';

const Inventory = styled.div`
  display: flex;
  width: 75%;
  height: 100%;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      cart: {},
    };
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get('/inventory').then((result) => {
      this.setState({ inventory: result.data });
    });
  }

  getCart() {
    axios.get('/cart').then((result) => {
      this.setState({ cart: result.data });
    });
  }

  // addItem(id, quantity) {
  //   axios.post('/add').then((result));
  // }

  render() {
    const { cart, inventory } = this.state;
    const items = inventory.map((item) => (
      <Item
        key={item.id}
        desc={item.description}
        image={item.image}
        price={item.unit_price}
        volume={item.volume_discounts}
      />
    ));
    return (

      <Inventory>
        {items}
      </Inventory>


    );
  }
}


export default App;
