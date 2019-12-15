import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: '',
    };
  }

  componentDidMount() {
    this.getCart();
  }

  getCart() {
    axios.get('/api').then((result) => {
      console.log(result.data);
      this.setState({ cart: result.data });
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <h1>{cart}</h1>
    );
  }
}


export default App;
