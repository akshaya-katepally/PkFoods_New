import React, { useState } from 'react';
import styled from 'styled-components';

const PowderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: 'Roboto', sans-serif;
`;

const PowderImage = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 15px;
  border-radius: 10px; 
`;

const PowderDetails = styled.div`
  text-align: center;
`;

const PowderName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  color: #222;
  font-weight: 700;
`;

const PowderPrice = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: #FF5733;
`;

const QuantityTotalContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const WeightDropdown = styled.select`
  width: 70px;
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const TotalPrice = styled.p`
  font-size: 16px;
  color: #222;
  margin: 0;
  font-weight: 700;
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

const PowderItem = ({ powder, addToCart }) => {
  const { id, name, price, image } = powder;
  const [weight, setWeight] = useState('1');

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const totalPrice = (price * parseInt(weight)).toFixed(2);

  const handleAddToCart = () => {
    addToCart({ ...powder, quantity: 1, totalPrice: parseFloat(totalPrice) });
  };  

  return (
    <PowderItemContainer>
      <PowderImage src={image} alt={name} />
      <PowderDetails>
        <PowderName>{name}</PowderName>
        <PowderPrice>₹{price.toFixed(2)}/kg</PowderPrice>
        <QuantityTotalContainer>
          <WeightDropdown value={weight} onChange={handleWeightChange}>
            <option value="1">1 kg</option>
            <option value="2">2 kg</option>
            <option value="3">3 kg</option>
            <option value="4">4 kg</option>
            <option value="5">5 kg</option>
            <option value="10">10 kg</option>
            <option value="15">15 kg</option>
            <option value="20">20 kg</option>
            <option value="25">25 kg</option>
          </WeightDropdown>
          <TotalPrice>₹{totalPrice}</TotalPrice>
        </QuantityTotalContainer>
        <AddToCartButton onClick={handleAddToCart}>
          Add to Cart
        </AddToCartButton>
      </PowderDetails>
    </PowderItemContainer>
  );
}

export default PowderItem;
