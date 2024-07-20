import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const images = [
  "rice1.jpeg",
  "millets1.jpeg",
  "powders1.jpeg",
  "rice2.jpeg",
  "millets2.jpeg",
  "powders2.jpeg",
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const HomeContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  animation: ${fadeIn} 3s ease;
`;

const HomeContent = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  animation: ${slideInFromLeft} 3s ease;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
  animation: ${slideInFromRight} 3s ease;
`;

const SlideshowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const SlideshowImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  animation: ${props => props.active ? zoomIn : fadeIn} 1s ease-in-out;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HomeContainer>
      <HomeContent>
        <Title>Welcome to PK Foods</Title>
        <Description>Discover our wide selection of rice, millets, and powders.</Description>
        <Description>Start exploring now!</Description>
        <SlideshowContainer>
          {images.map((image, index) => (
            <SlideshowImage
              key={index}
              src={image}
              alt={`Slide ${index}`}
              active={index === currentImageIndex}
            />
          ))}
        </SlideshowContainer>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;
