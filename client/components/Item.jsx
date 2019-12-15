import React, { Component } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: block;
  max-width: 70px;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  max-height: 60px;
`;

const ItemInfo = styled.div`
  width: 100%;
  max-height: 70%;
`;

const Volume = styled.table`
  width: 100%;
  max-height: 30%;
`;

const Item = (props) => {
  const {
    image, description, unit_price, volume_discount,
  } = props;
  let number; const
    price = 'N/A';

  if (volume_discount.length > 0) {
    volume_discount.map((disc) => {
      <tr>
        <td>{number}</td>
        <td>{price}</td>
      </tr>;
    });
  }

  return (
    <ItemContainer>
      <Image href={image} />
      <ItemInfo>
        {description}
        {unit_price}
        <Volume>
          <tr>
            <th>Volume Discount</th>
            <th>Price</th>
          </tr>
        </Volume>
      </ItemInfo>
    </ItemContainer>

  );
};

export default Item;
