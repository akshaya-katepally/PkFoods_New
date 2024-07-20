import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png'; 

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #00ADB5, #006F7B);
  padding: 0 20px;
  height: 70px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Roboto', Arial, Helvetica, sans-serif; /* Use Roboto font */
  font-weight: bold;
`;

const LogoImg = styled.img`
  height: 50px;
  cursor: pointer;
`;

const NavbarUl = styled.ul`
  display: flex;
  align-items: center; /* Ensure items are centered */
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavbarUlLi = styled.li`
  margin: 0 15px;
`;

const NavbarUlLiA = styled(Link)`
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.2rem; /* Increase font size */
  color: #eeeeee;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ isHovered }) => (isHovered ? '#EEEEEE' : 'transparent')};
  color: ${({ isHovered }) => (isHovered ? '#222831' : '#EEEEEE')};
  &:hover {
    background-color: #EEEEEE;
    color: #222831;
  }
`;

const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CartCount = styled.span`
  background-color: #FF5733;
  color: #ffffff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  position: absolute;
  top: -5px;
  right: -10px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  background-color: #00ADB5;
  color: #EEEEEE;
  border: 2px solid #EEEEEE;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  margin-right: 10px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif; /* Use Roboto font */
  &:hover {
    background-color: #EEEEEE;
    color: #222831;
    border: 2px solid #222831;
  }
`;

const AlertContainer = styled.div`
  position: fixed;
  top: 70px; /* Adjust to be below the Navbar */
  width: 100%;
  background-color: #46A5AD;
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  z-index: 1000;
`;


function Navbar({ addToCart, cartItems, setAlertMessage, alertMessage }) {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAlertMessage(`${item.name} (${item.quantity} kg) added to cart!`);
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <NavbarContainer>
        <Link to="/">
          <LogoImg src={logo} alt="Roamio Logo" />
        </Link>
        <NavbarUl>
          <NavbarUlLi>
            <NavbarUlLiA
              to="/"
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
              isHovered={hoveredItem === 'home'}
            >
              Home
            </NavbarUlLiA>
          </NavbarUlLi>
          <NavbarUlLi>
            <NavbarUlLiA
              to="/rice"
              onMouseEnter={() => handleMouseEnter('rice')}
              onMouseLeave={handleMouseLeave}
              isHovered={hoveredItem === 'rice'}
            >
              Rice
            </NavbarUlLiA>
          </NavbarUlLi>
          <NavbarUlLi>
            <NavbarUlLiA
              to="/millets"
              onMouseEnter={() => handleMouseEnter('millets')}
              onMouseLeave={handleMouseLeave}
              isHovered={hoveredItem === 'millets'}
            >
              Millets
            </NavbarUlLiA>
          </NavbarUlLi>
          <NavbarUlLi>
            <NavbarUlLiA
              to="/powders"
              onMouseEnter={() => handleMouseEnter('powders')}
              onMouseLeave={handleMouseLeave}
              isHovered={hoveredItem === 'powders'}
            >
              Powders
            </NavbarUlLiA>
          </NavbarUlLi>
          <NavbarUlLi>
            <CartIconContainer>
              <NavbarUlLiA
                to="/cart"
                onMouseEnter={() => handleMouseEnter('cart')}
                onMouseLeave={handleMouseLeave}
                isHovered={hoveredItem === 'cart'}
              >
                Cart
              </NavbarUlLiA>
              {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
            </CartIconContainer>
          </NavbarUlLi>
        </NavbarUl>
        <BtnContainer>
          <Btn
            onClick={() => navigate('/contactus')}
            onMouseEnter={() => handleMouseEnter('contactus')}
            onMouseLeave={handleMouseLeave}
          >
            Contact Us
          </Btn>
          <Btn
            onClick={() => navigate('/login')}
            onMouseEnter={() => handleMouseEnter('login')}
            onMouseLeave={handleMouseLeave}
          >
            Login/Sign Up
          </Btn>
        </BtnContainer>
      </NavbarContainer>
      {alertMessage && (
        <AlertContainer>
          {alertMessage}
        </AlertContainer>
      )}
    </>
  );
}

export default Navbar;
