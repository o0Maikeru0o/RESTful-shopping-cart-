import React from 'react';

const CartItem = ({ description, quantity, subtotal }) => (
  <tr>
    <td>{description}</td>
    <td>{quantity}</td>
    <td>{subtotal}</td>
  </tr>
);

export default CartItem;
