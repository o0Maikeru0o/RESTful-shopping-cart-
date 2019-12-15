import React, { Component } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: block;
  margin: 5%;
  max-width: 150px;
  height: 100%;
  text-align: justify;
`;

const Image = styled.img`
  width: 125px;
  height: 142px;
`;

const ItemInfo = styled.div`
  display: block;
  width: 100%;
  height: 60%;
`;

const Volume = styled.table`
  font-size: 15px;
  width: 100%;
  max-height: 30%;
  border: 1px solid black;
  border-collapse: collapse;
  th, td {
    border: 1px solid black;
  }
`;

const AddQuantity = styled.input`
  type: number;
`;

const Item = ({
  image, desc, price, volume,
}) => {
  console.log('item props', desc);
  let volumeInfo;

  if (volume.length > 0) {
    volumeInfo = volume.map((disc) => (
      <tr key={disc.number}>
        <td>{disc.number}</td>
        <td>{disc.price}</td>
      </tr>
    ));
  } else {
    volumeInfo = (
      <tr>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
    );
  }

  return (
    <ItemContainer>
      <Image src={image} alt={desc} />
      <ItemInfo>
        <h3>{desc}</h3>
        Unit Price:
        {' '}
        {price}
        <Volume>
          <tbody>
            <tr>
              <th>Volume Pricing</th>
            </tr>
            <tr>
              <td>Number</td>
              <td>Price</td>
            </tr>
            {volumeInfo}
          </tbody>
        </Volume>
      </ItemInfo>
      <form>
        <input type="number" name="quantity" />
        <input type="submit" />
      </form>
    </ItemContainer>

  );
};

export default Item;
