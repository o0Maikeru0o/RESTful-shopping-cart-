import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const CartContainer = styled.div`
  display: block;
  margin-left: 25%;
  width: 25%;
  height: 100%;
`;

const CartItems = styled.table`
  font-size: 15px;
  width: 100%;
  max-height: 30%;
  border: 1px solid black;
  border-collapse: collapse;
  th, td {
    border: 1px solid black;
  }
`;

const Cart = ({ cart, clearCart }) => {
  let items;

  if (cart.items) {
    items = Object.keys(cart.items).map((id) => (
      <CartItem
        key={id}
        description={cart.items[id].description}
        quantity={cart.items[id].quantity}
        subtotal={cart.items[id].subtotal}
      />
    ));
  } else {
    items = (
      <tr>
        <td>Cart is empty</td>
        <td />
        <td />
      </tr>
    );
  }

  return (
    <CartContainer>
      <CartItems>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {items}
        </tbody>
      </CartItems>
      <div>
        Total:
        {' '}
        {cart.total}
      </div>
      <button type="submit" onClick={() => clearCart()}>Clear Cart</button>
    </CartContainer>
  );
};

export default Cart;
