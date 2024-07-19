// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import styled from 'styled-components';

const CartPageContainer = styled.div`
  padding: 20px;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ContinueShoppingButton = styled(Link)`
  display: block;
  width: fit-content;
  padding: 10px 20px;
  background-color: #46A5AD;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2C717C;
  }
`;

const ProceedToBuyButton = styled(Link)`
  display: block;
  width: fit-content;
  padding: 10px 20px;
  background-color: #FF5733;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #D54700;
  }
`;

function CartPage({ cartItems, removeFromCart, updateCartItemQuantity }) {
  return (
    <CartPageContainer>
      <Heading>Your Cart</Heading>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity} />
      <ButtonContainer>
        <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>
        <ProceedToBuyButton to="/checkout">Proceed to Buy</ProceedToBuyButton>
      </ButtonContainer>
    </CartPageContainer>
  );
}

export default CartPage;
