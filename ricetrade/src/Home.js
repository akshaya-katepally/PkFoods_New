// // import React, { useEffect, useState } from 'react';
// // import styled, { keyframes } from 'styled-components';

// // const images = [
// //   "rice1.jpeg",
// //   "millets1.jpeg",
// //   "powders1.jpeg",
// //   "rice2.jpeg",
// //   "millets2.jpeg",
// //   "powders2.jpeg",
// // ];

// // const HomeContainer = styled.div`
// //   background-color: #f5f5f5;
// //   padding: 20px;
// // `;

// // const HomeContent = styled.div`
// //   text-align: center;
// // `;

// // const Title = styled.h2`
// //   font-size: 3rem;
// //   color: #222;
// //   margin-bottom: 20px;
// //   font-family: 'Roboto', sans-serif;
// // `;

// // const Description = styled.p`
// //   font-size: 1.2rem;
// //   color: #444;
// //   margin-bottom: 20px;
// //   font-family: 'Roboto', sans-serif;
// // `;

// // const SlideshowContainer = styled.div`
// //   position: relative;
// //   width: 100%;
// //   height: 500px;
// //   overflow: hidden;
// //   border-radius: 10px;
// //   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
// // `;

// // const fade = keyframes`
// //   from {
// //     opacity: 0;
// //   }
// //   to {
// //     opacity: 1;
// //   }
// // `;

// // const SlideshowImage = styled.img`
// //   position: absolute;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   object-fit: cover;
// //   animation: ${fade} 1s ease-in-out;
// //   opacity: ${props => props.active ? 1 : 0};
// //   border-radius: 10px;
// // `;

// // const Home = () => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <HomeContainer>
// //       <HomeContent>
// //         <Title>Welcome to PK Foods</Title>
// //         <Description>Discover our wide selection of rice, millets, and powders.</Description>
// //         <Description>Start exploring now!</Description>
// //         <SlideshowContainer>
// //           {images.map((image, index) => (
// //             <SlideshowImage
// //               key={index}
// //               src={image}
// //               alt={`Slide ${index}`}
// //               active={index === currentImageIndex}
// //             />
// //           ))}
// //         </SlideshowContainer>
// //       </HomeContent>
// //     </HomeContainer>
// //   );
// // }

// // export default Home;

// import React, { useEffect, useState } from 'react';
// import styled, { keyframes } from 'styled-components';

// const images = [
//   "rice1.jpeg",
//   "millets1.jpeg",
//   "powders1.jpeg",
//   "rice2.jpeg",
//   "millets2.jpeg",
//   "powders2.jpeg",
// ];

// const HomeContainer = styled.div`
//   background-color: #f5f5f5;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Title = styled.h1`
//   font-size: 3.5rem;
//   color: #333;
//   font-family: 'Pacifico', cursive;
//   text-align: center;
//   margin-bottom: 20px;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
// `;

// const SlideshowContainer = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 800px;
//   height: 400px;
//   overflow: hidden;
//   border-radius: 20px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
// `;

// const SlideshowImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   opacity: ${props => props.active ? 1 : 0};
//   transition: opacity 1s ease-in-out;
// `;

// const Description = styled.p`
//   font-size: 1.5rem;
//   color: #444;
//   font-family: 'Roboto', sans-serif;
//   text-align: center;
//   max-width: 800px;
//   margin-bottom: 40px;
// `;

// const ShopNowButton = styled.button`
//   background-color: #ff6b6b;
//   color: white;
//   border: none;
//   padding: 15px 30px;
//   border-radius: 30px;
//   font-size: 1.5rem;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   &:hover {
//     background-color: #ff4d4d;
//   }
// `;

// const Wave = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-10px);
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;

// const WaveEmoji = styled.span`
//   font-size: 4rem;
//   animation: ${Wave} 2s ease infinite;
// `;

// const Home = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <HomeContainer>
//       <Title>Welcome to PK Foods <WaveEmoji>👋</WaveEmoji></Title>
//       <SlideshowContainer>
//         {images.map((image, index) => (
//           <SlideshowImage
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             active={index === currentImageIndex}
//           />
//         ))}
//       </SlideshowContainer>
//       <Description>Discover our wide selection of rice, millets, and powders. Let's embark on a delicious journey together!</Description>
//       <ShopNowButton>Shop Now</ShopNowButton>
//     </HomeContainer>
//   );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Sample product images
const images = [
  "rice1.jpeg",
  "millets1.jpeg",
  "powders1.jpeg",
  "rice2.jpeg",
  "millets2.jpeg",
  "powders2.jpeg",
];

// Styled components for Home page
const HomeContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
`;

const HomeContent = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

const SlideshowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideshowImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  animation: ${fade} 1s ease-in-out;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// Home component
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

// import React, { useEffect, useState } from 'react';
// import './Home.css';
// import rice1 from './images/rice1.jpeg';
// import millets1 from './images/millets1.jpeg';
// import powders1 from './images/powders1.jpeg';
// import rice2 from './images/rice2.jpeg';
// import millets2 from './images/millets2.jpeg';
// import powders2 from './images/powders2.jpeg';

// function Home() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     { src: rice1, alt: "Rice 1", description: "Our premium rice variety" },
//     { src: millets1, alt: "Millets 1", description: "Nutritious millets for a healthy diet" },
//     { src: powders1, alt: "Powders 1", description: "Finest powder products for your needs" },
//     { src: rice2, alt: "Rice 2", description: "Another popular rice variety" },
//     { src: millets2, alt: "Millets 2", description: "More millets options for you" },
//     { src: powders2, alt: "Powders 2", description: "Even more powder products to explore" },
//   ];
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="home-container">
//       <div className="home-content">
//         <h2>Welcome to PK Foods</h2>
//         <p>Discover our wide selection of rice, millets, and powders.</p>
//         <p>Start exploring now!</p>
//         <div className="slideshow">
//           {images.map((image, index) => (
//             <div key={index} className={index === currentImageIndex ? 'active' : ''}>
//               <img src={image.src} alt={image.alt} />
//               <div className="image-caption">
//                 <p>{image.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;