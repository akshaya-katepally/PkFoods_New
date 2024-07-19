// PowderList.js 
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import PowderItem from './PowderItem';
import powderData from './powderData';

const PowderListContainer = styled.div`
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

const ListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ListLi = styled.li`
  margin: 30px;
  width: calc(25% - 60px);
`;

const PowderList = ({ addToCart }) => {
  return (
    <PowderListContainer>
      <Title>Powder Varieties</Title>
      <ListUl>
        {powderData.map(powder => (
          <ListLi key={powder.id}>
            <Link to={`/powder/${powder.id}`}>
              <PowderItem powder={powder} addToCart={addToCart} />
            </Link>
          </ListLi>
        ))}
      </ListUl>
    </PowderListContainer>
  );
};

export default PowderList;
