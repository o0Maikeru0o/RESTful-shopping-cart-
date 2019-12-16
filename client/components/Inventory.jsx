import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const InventoryContainer = styled.div`
  display: flex;
  width: 75%;
  height: 100%;
  justify-content: center;
`;

const Inventory = ({ inventory, addToCart }) => {
  const items = inventory.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      desc={item.description}
      image={item.image}
      price={item.unit_price}
      volume={item.volume_discounts}
      addToCart={addToCart}
    />
  ));
  return (
    <InventoryContainer>
      {items}
    </InventoryContainer>
  );
};

export default Inventory;
