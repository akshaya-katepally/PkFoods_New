//MilletItem.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: 'Roboto', sans-serif;
`;

const ItemImage = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const ItemDetails = styled.div`
  text-align: center;
`;

const ItemName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  color: #222;
  font-weight: 700;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: #FF5733;
`;

const QuantityTotalContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SelectWeight = styled.select`
  width: 80px;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TotalPrice = styled.p`
  font-size: 16px;
  color: #222;
  margin: 0;
`;

const AddToCartButton = styled.button`
  background-color: #46A5AD;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    background-color: #2C717C;
  }
`;

const MilletItem = ({ millet, addToCart }) => {
  const { id, name, price, image } = millet;
  const [weight, setWeight] = useState('1');

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const totalPrice = (parseFloat(price) * parseFloat(weight)).toFixed(2);

  const handleAddToCart = () => {
    addToCart({ ...millet, quantity: 1, totalPrice: parseFloat(totalPrice) });
  };

  return (
    <ItemContainer>
      <Link to={`/millet/${id}`}>
        <ItemImage src={image} alt={name} />
      </Link>
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>₹{price.toFixed(2)}/kg</ItemPrice>
        <QuantityTotalContainer>
          <SelectWeight value={weight} onChange={handleWeightChange}>
            <option value="1">1 kg</option>
            <option value="2">2 kg</option>
            <option value="3">3 kg</option>
            <option value="4">4 kg</option>
            <option value="5">5 kg</option>
            <option value="10">10 kg</option>
            <option value="15">15 kg</option>
            <option value="20">20 kg</option>
            <option value="25">25 kg</option>
          </SelectWeight>
          <TotalPrice>₹{totalPrice}</TotalPrice>
        </QuantityTotalContainer>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </ItemDetails>
    </ItemContainer>
  );
};

export default MilletItem;
