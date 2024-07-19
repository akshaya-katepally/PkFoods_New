// RiceList.js
import React from 'react';
import styled from 'styled-components';
import RiceItem from './RiceItem';
import riceData from './riceData';

const RiceListContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h2`
  font-family: 'Comic Sans MS', cursive; 
  font-size: 32px; 
  color: #FF5733; 
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
  letter-spacing: 1px; 
`;

const RiceListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RiceListLi = styled.li`
  margin: 15px;
  width: 220px; 
`;

const RiceList = ({ addToCart }) => {
  return (
    <RiceListContainer>
      <Title>Rice Varieties</Title>
      <RiceListUl>
        {riceData.map(rice => (
          <RiceListLi key={rice.id}>
            <RiceItem rice={rice} addToCart={addToCart} />
          </RiceListLi>
        ))}
      </RiceListUl>
    </RiceListContainer>
  );
};

export default RiceList;

