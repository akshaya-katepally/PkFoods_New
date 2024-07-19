// MilletList.js
import React from 'react';
import styled from 'styled-components';
import MilletItem from './MilletItem'; 
import milletData from './milletData'; 

const MilletListContainer = styled.div`
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
  width: calc(25% - 60px); 
`;

const MilletList = ({ addToCart }) => {
  return (
    <MilletListContainer>
      <Title>Millet Varieties</Title>
      <ListUl>
        {milletData.map(millet => (
          <ListLi key={millet.id}>
            <MilletItem millet={millet} addToCart={addToCart} />
          </ListLi>
        ))}
      </ListUl>
    </MilletListContainer>
  );
};

export default MilletList;
