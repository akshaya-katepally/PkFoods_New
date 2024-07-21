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
  background-color: #fffff;
  padding: 20px;
  animation: ${fadeIn} 3s ease;
  font-family: 'Roboto', sans-serif;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 20px 0;
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
  width: 60%;
  border-radius: 10px;
  animation: ${fadeIn} 2s ease;
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

const Heading = styled.h2`
  font-family: 'Comic Sans MS', cursive; 
  font-size: 28px; 
  color: #46A5AD; 
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
  letter-spacing: 1px; 
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  animation: ${fadeIn} 2s ease;
  font-family: 'Lora', serif;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to PK Foods</Title>
      <Description>Discover the finest selection of organic, wholesome grains and traditional Indian powders, curated for a healthier, more vibrant lifestyle. Our collection includes an array of premium rice varieties, nutrient-rich millets, and time-honored Indian powders, each chosen for their exceptional quality and natural benefits. Embark on a culinary journey with PK Foods, where every grain and powder is a testament to purity, sustainability, and the rich heritage of Indian cuisine. Indulge in the goodness of nature with our meticulously sourced, healthy offerings, and elevate your meals to new heights of flavor and nutrition.</Description>
      <Section>
        <TextContainer>
          <Heading>Rice</Heading>
          <p>Rice, domesticated over 9,000 years ago in Asia, is a staple food for more than half the world's population. Its versatility spans culinary uses—from sushi to risotto—and non-culinary uses like animal feed and industrial products. Nutritionally, rice provides complex carbohydrates, essential vitamins, and minerals. It accommodates various dietary needs, is affordable, widely available, and has a long shelf life. Rice also holds cultural significance and supports local farmers, making it a practical and meaningful food choice that adapts well to diverse environments and contributes to sustainable agriculture.</p>
        </TextContainer>
        <ImageContainer>
          <Image src="./rice1.jpeg" alt="Rice" />
        </ImageContainer>
      </Section>
      <Section even>
        <TextContainer>
          <Heading>Millets</Heading>
          <p>Millets, ancient grains domesticated over 7,000 years ago in Asia and Africa, are vital for nutrition and agriculture. Known for their drought resistance, millets include varieties like pearl, foxtail, and finger millet. Nutritionally rich, they provide essential proteins, fiber, vitamins, and minerals. Millets cater to gluten-free diets, offer culinary versatility in dishes like porridge and flatbreads, and have a long shelf life. Affordable and accessible, they support food security and sustainable farming practices, making them a practical and healthful choice that benefits both consumers and the environment.</p>
        </TextContainer>
        <ImageContainer>
          <Image src="./millets1.jpeg" alt="Millets" />
        </ImageContainer>
      </Section>
      <Section>
        <TextContainer>
          <Heading>Powders</Heading>
          <p>Traditional Indian powders, derived from herbs, spices, and grains, play a crucial role in Indian cuisine and Ayurveda. Turmeric, coriander, cumin, chili powder, and garam masala are staples in cooking, adding flavor, color, and health benefits like anti-inflammatory and antioxidant properties. Ayurvedic powders like ashwagandha, triphala, neem, amla, and shikakai are renowned for their healing qualities, supporting stress management, immunity, digestion, and skin and hair health. These powders are not only essential for creating flavorful dishes but also for their medicinal uses, reflecting their deep cultural significance in promoting wellness and holistic healing.</p>
        </TextContainer>
        <ImageContainer>
          <Image src="./powders1.jpeg" alt="Powders" />
        </ImageContainer>
      </Section>
    </HomeContainer>
  );
}

export default Home;
