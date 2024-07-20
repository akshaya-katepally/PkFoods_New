import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

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

const HomeContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  animation: ${fadeIn} 3s ease;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 50px 0;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  animation: ${props => props.even ? slideInFromRight : slideInFromLeft} 2s ease;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 80%;
  border-radius: 10px;
  animation: ${fadeIn} 2s ease;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to PK Foods</Title>
      <Description>Discover our wide selection of organic, healthy rice, millets, and traditional Indian powders.</Description>
      <Section>
        <TextContainer>
          <h2>Rice</h2>
          <p>Origin, history, uses, and more about rice...</p>
        </TextContainer>
        <ImageContainer>
          <Image src="./rice1.jpeg" alt="Rice" />
        </ImageContainer>
      </Section>
      <Section even>
        <TextContainer>
          <h2>Millets</h2>
          <p>Information about various millets...</p>
        </TextContainer>
        <ImageContainer>
          <Image src="./millets1.jpeg" alt="Millets" />
        </ImageContainer>
      </Section>
      <Section>
        <TextContainer>
          <h2>Traditional Powders</h2>
          <p>Details about traditional Indian powders...</p>
        </TextContainer>
        <ImageContainer>
          <Image src="./powders1.jpeg" alt="Powders" />
        </ImageContainer>
      </Section>
    </HomeContainer>
  );
}

export default Home;
