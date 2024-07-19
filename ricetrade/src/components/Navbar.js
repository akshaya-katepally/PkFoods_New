// // // Navbar.js
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';

// // function Navbar() {
// //     const navigate = useNavigate();
// //     const [hoveredItem, setHoveredItem] = useState(null);

// //     const handleMouseEnter = (itemId) => {
// //         setHoveredItem(itemId);
// //     };

// //     const handleMouseLeave = () => {
// //         setHoveredItem(null);
// //     };

// //     const styles = {
// //         navbar: {
// //             display: 'flex',
// //             justifyContent: 'space-around',
// //             backgroundColor: '#00ADB5',
// //             alignItems: 'center',
// //             height: '10vh',
// //             fontFamily: 'Arial, Helvetica, sans-serif',
// //             fontWeight: 'bold',
// //         },
// //         logoImg: {
// //             marginTop: '4.2vw',
// //             height: '8vw',
// //         },
// //         navbarUl: {
// //             display: 'flex',
// //         },
// //         navbarUlLi: {
// //             listStyle: 'none',
// //             fontSize: '1.8rem',
// //         },
// //         navbarUlLiA: {
// //             display: 'block',
// //             margin: '15px',
// //             padding: '3px 22px',
// //             borderRadius: '10px',
// //             textDecoration: 'none',
// //             cursor: 'pointer',
// //         },
// //     };

// //     return (
// //         <nav style={styles.navbar}>
// //             <div>
// //                 <Link to="/" style={styles.logo}>
// //                     <img src={require("../images/logo.png")} alt="Roamio Logo" style={styles.logoImg} />
// //                 </Link>
// //             </div>
// //             <ul style={styles.navbarUl}>
// //                 <li style={styles.navbarUlLi}>
// //                     <Link to="/" onMouseEnter={() => handleMouseEnter('home')}
// //                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'home' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'home' ? '#222831' : '#EEEEEE' }} >Home</Link>
// //                 </li>
// //                 <li style={styles.navbarUlLi}>
// //                     <Link to="/rice" onMouseEnter={() => handleMouseEnter('rice')}
// //                         onMouseLeave={handleMouseLeave}
// //                         style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'rice' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'rice' ? '#222831' : '#EEEEEE' }}>Rice</Link>
// //                 </li>
// //                 <li style={styles.navbarUlLi}>
// //                     <Link to="/millets" onMouseEnter={() => handleMouseEnter('millets')}
// //                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'millets' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'millets' ? '#222831' : '#EEEEEE' }} >Millets</Link>
// //                 </li>
// //                 <li style={styles.navbarUlLi}>
// //                     <Link to="/powders" onMouseEnter={() => handleMouseEnter('powders')}
// //                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'powders' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'powders' ? '#222831' : '#EEEEEE' }} >Powders</Link>
// //                 </li>
// //             </ul>
// //             <div style={styles.btnContainer}>
// //                 <button onClick={() => navigate('/contactus')} onMouseEnter={() => handleMouseEnter('contactus')}
// //                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'contactus' ? '#222831' : '#EEEEEE', color: hoveredItem === 'contactus' ? '#EEEEEE' : '#222831' }}>
// //                     Contact Us
// //                 </button>
// //                 <button onClick={() => navigate('/login')} onMouseEnter={() => handleMouseEnter('login')}
// //                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'login' ? '#222831' : '#EEEEEE', color: hoveredItem === 'login' ? '#EEEEEE' : '#222831' }} >
// //                     Login/Sign Up
// //                 </button>
// //             </div>
// //         </nav>
// //     );
// // }

// // export default Navbar;

// // Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Navbar({ addToCart, cartItems }) {
//     const navigate = useNavigate();
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const handleMouseEnter = (itemId) => {
//         setHoveredItem(itemId);
//     };

//     const handleMouseLeave = () => {
//         setHoveredItem(null);
//     };

//     const styles = {
//         navbar: {
//             display: 'flex',
//             justifyContent: 'space-around',
//             backgroundColor: '#00ADB5',
//             alignItems: 'center',
//             height: '10vh',
//             fontFamily: 'Arial, Helvetica, sans-serif',
//             fontWeight: 'bold',
//         },
//         logoImg: {
//             marginTop: '4.2vw',
//             height: '8vw',
//         },
//         navbarUl: {
//             display: 'flex',
//         },
//         navbarUlLi: {
//             listStyle: 'none',
//             fontSize: '1.8rem',
//         },
//         navbarUlLiA: {
//             display: 'block',
//             margin: '15px',
//             padding: '3px 22px',
//             borderRadius: '10px',
//             textDecoration: 'none',
//             cursor: 'pointer',
//         },
//         cartCount: {
//             backgroundColor: 'red',
//             color: 'white',
//             borderRadius: '50%',
//             width: '20px',
//             height: '20px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             position: 'absolute',
//             top: '0',
//             right: '0',
//             fontSize: '0.8rem',
//         },
//     };

//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     return (
//         <nav style={styles.navbar}>
//             <div>
//                 <Link to="/" style={styles.logo}>
//                     <img src={require("../images/logo.png")} alt="Roamio Logo" style={styles.logoImg} />
//                 </Link>
//             </div>
//             <ul style={styles.navbarUl}>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/" onMouseEnter={() => handleMouseEnter('home')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'home' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'home' ? '#222831' : '#EEEEEE' }} >Home</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/rice" onMouseEnter={() => handleMouseEnter('rice')}
//                         onMouseLeave={handleMouseLeave}
//                         style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'rice' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'rice' ? '#222831' : '#EEEEEE' }}>Rice</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/millets" onMouseEnter={() => handleMouseEnter('millets')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'millets' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'millets' ? '#222831' : '#EEEEEE' }} >Millets</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/powders" onMouseEnter={() => handleMouseEnter('powders')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'powders' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'powders' ? '#222831' : '#EEEEEE' }} >Powders</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/cart" onMouseEnter={() => handleMouseEnter('cart')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'cart' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'cart' ? '#222831' : '#EEEEEE' }}>
//                         Cart
//                         {cartItemCount > 0 && <span style={styles.cartCount}>{cartItemCount}</span>}
//                     </Link>
//                 </li>
//             </ul>
//             <div style={styles.btnContainer}>
//                 <button onClick={() => navigate('/contactus')} onMouseEnter={() => handleMouseEnter('contactus')}
//                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'contactus' ? '#222831' : '#EEEEEE', color: hoveredItem === 'contactus' ? '#EEEEEE' : '#222831' }}>
//                     Contact Us
//                 </button>
//                 <button onClick={() => navigate('/login')} onMouseEnter={() => handleMouseEnter('login')}
//                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'login' ? '#222831' : '#EEEEEE', color: hoveredItem === 'login' ? '#EEEEEE' : '#222831' }} >
//                     Login/Sign Up
//                 </button>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// // Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Navbar({ addToCart, cartItems }) {
//     const navigate = useNavigate();
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const handleMouseEnter = (itemId) => {
//         setHoveredItem(itemId);
//     };

//     const handleMouseLeave = () => {
//         setHoveredItem(null);
//     };

//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const styles = {
//         navbar: {
//             display: 'flex',
//             justifyContent: 'space-around',
//             backgroundColor: '#00ADB5',
//             alignItems: 'center',
//             height: '10vh',
//             fontFamily: 'Arial, Helvetica, sans-serif',
//             fontWeight: 'bold',
//         },
//         logoImg: {
//             marginTop: '4.2vw',
//             height: '8vw',
//         },
//         navbarUl: {
//             display: 'flex',
//         },
//         navbarUlLi: {
//             listStyle: 'none',
//             fontSize: '1.8rem',
//         },
//         navbarUlLiA: {
//             display: 'block',
//             margin: '15px',
//             padding: '3px 22px',
//             borderRadius: '10px',
//             textDecoration: 'none',
//             cursor: 'pointer',
//         },
//         cartCount: {
//             backgroundColor: 'red',
//             color: 'white',
//             borderRadius: '50%',
//             width: '20px',
//             height: '20px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             position: 'absolute',
//             top: '0',
//             right: '0',
//             fontSize: '0.8rem',
//         },
//     };

//     return (
//         <nav style={styles.navbar}>
//             <div>
//                 <Link to="/" style={styles.logo}>
//                     <img src={require("../images/logo.png")} alt="Roamio Logo" style={styles.logoImg} />
//                 </Link>
//             </div>
//             <ul style={styles.navbarUl}>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/" onMouseEnter={() => handleMouseEnter('home')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'home' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'home' ? '#222831' : '#EEEEEE' }} >Home</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/rice" onMouseEnter={() => handleMouseEnter('rice')}
//                         onMouseLeave={handleMouseLeave}
//                         style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'rice' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'rice' ? '#222831' : '#EEEEEE' }}>Rice</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/millets" onMouseEnter={() => handleMouseEnter('millets')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'millets' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'millets' ? '#222831' : '#EEEEEE' }} >Millets</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/powders" onMouseEnter={() => handleMouseEnter('powders')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'powders' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'powders' ? '#222831' : '#EEEEEE' }} >Powders</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/cart" onMouseEnter={() => handleMouseEnter('cart')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'cart' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'cart' ? '#222831' : '#EEEEEE' }}>
//                         Cart
//                         {cartItemCount > 0 && <span style={styles.cartCount}>{cartItemCount}</span>}
//                     </Link>
//                 </li>
//             </ul>
//             <div style={styles.btnContainer}>
//                 <button onClick={() => navigate('/contactus')} onMouseEnter={() => handleMouseEnter('contactus')}
//                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'contactus' ? '#222831' : '#EEEEEE', color: hoveredItem === 'contactus' ? '#EEEEEE' : '#222831' }}>
//                     Contact Us
//                 </button>
//                 <button onClick={() => navigate('/login')} onMouseEnter={() => handleMouseEnter('login')}
//                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'login' ? '#222831' : '#EEEEEE', color: hoveredItem === 'login' ? '#EEEEEE' : '#222831' }} >
//                     Login/Sign Up
//                 </button>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// // Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Navbar({ addToCart, cartItems }) {
//     console.log("addToCart function in Navbar:", addToCart);
//     const navigate = useNavigate();
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const handleMouseEnter = (itemId) => {
//         setHoveredItem(itemId);
//     };

//     const handleMouseLeave = () => {
//         setHoveredItem(null);
//     };

//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const styles = {
//         navbar: {
//             display: 'flex',
//             justifyContent: 'space-around',
//             backgroundColor: '#00ADB5',
//             alignItems: 'center',
//             height: '10vh',
//             fontFamily: 'Arial, Helvetica, sans-serif',
//             fontWeight: 'bold',
//         },
//         logoImg: {
//             height: '6vw',
//         },
//         navbarUl: {
//             display: 'flex',
//         },
//         navbarUlLi: {
//             listStyle: 'none',
//             fontSize: '1.8rem',
//         },
//         navbarUlLiA: {
//             display: 'block',
//             margin: '15px',
//             padding: '3px 22px',
//             borderRadius: '10px',
//             textDecoration: 'none',
//             cursor: 'pointer',
//             color: '#EEEEEE', 
//         },
//         cartCount: {
//             backgroundColor: 'red',
//             color: 'white',
//             borderRadius: '50%',
//             width: '20px',
//             height: '20px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             position: 'absolute',
//             top: '0',
//             right: '0',
//             fontSize: '0.8rem',
//         },
//         btn: {
//             backgroundColor: '#00ADB5', 
//             color: '#EEEEEE', 
//             border: 'none',
//             borderRadius: '5px',
//             padding: '10px 20px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s ease',
//             marginRight: '10px', 
//         },
//     };

//     return (
//         <nav style={styles.navbar}>
//             <div>
//                 <Link to="/" style={styles.logo}>
//                     <img src={require("../images/logo.png")} alt="Roamio Logo" style={styles.logoImg} />
//                 </Link>
//             </div>
//             <ul style={styles.navbarUl}>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/" onMouseEnter={() => handleMouseEnter('home')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'home' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'home' ? '#222831' : '#EEEEEE' }} >Home</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/rice" onMouseEnter={() => handleMouseEnter('rice')}
//                         onMouseLeave={handleMouseLeave}
//                         style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'rice' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'rice' ? '#222831' : '#EEEEEE' }}>Rice</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/millets" onMouseEnter={() => handleMouseEnter('millets')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'millets' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'millets' ? '#222831' : '#EEEEEE' }} >Millets</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/powders" onMouseEnter={() => handleMouseEnter('powders')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'powders' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'powders' ? '#222831' : '#EEEEEE' }} >Powders</Link>
//                 </li>
//                 <li style={styles.navbarUlLi}>
//                     <Link to="/cart" onMouseEnter={() => handleMouseEnter('cart')}
//                         onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'cart' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'cart' ? '#222831' : '#EEEEEE' }}>
//                         Cart
//                         {cartItemCount > 0 && <span style={styles.cartCount}>{cartItemCount}</span>}
//                     </Link>
//                 </li>
//             </ul>
//             <div style={styles.btnContainer}>
//                 <button onClick={() => navigate('/contactus')} onMouseEnter={() => handleMouseEnter('contactus')}
//                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'contactus' ? '#222831' : '#00ADB5' }}>
//                     Contact Us
//                 </button>
//                 <button onClick={() => navigate('/login')} onMouseEnter={() => handleMouseEnter('login')}
//                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'login' ? '#222831' : '#00ADB5' }} >
//                     Login/Sign Up
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// // Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Navbar({ addToCart, cartItems }) {
//     console.log("addToCart function in Navbar:", addToCart);
//     const navigate = useNavigate();
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const handleMouseEnter = (itemId) => {
//         setHoveredItem(itemId);
//     };

//     const handleMouseLeave = () => {
//         setHoveredItem(null);
//     };

//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     const styles = {
//         navbar: {
//             display: 'flex',
//             justifyContent: 'space-around',
//             backgroundColor: '#00ADB5',
//             alignItems: 'center',
//             height: '10vh',
//             fontFamily: 'Arial, Helvetica, sans-serif',
//             fontWeight: 'bold',
//         },
//         logoImg: {
//             height: '6vw',
//         },
//         navbarUl: {
//             display: 'flex',
//         },
//         navbarUlLi: {
//             listStyle: 'none',
//             fontSize: '1.8rem',
//         },
//         navbarUlLiA: {
//             display: 'block',
//             margin: '15px',
//             padding: '3px 22px',
//             borderRadius: '10px',
//             textDecoration: 'none',
//             cursor: 'pointer',
//         },
//         cartCount: {
//             backgroundColor: 'red',
//             color: 'white',
//             borderRadius: '50%',
//             width: '20px',
//             height: '20px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             position: 'absolute',
//             top: '0',
//             right: '0',
//             fontSize: '0.8rem',
//         },
//     };

//     return (
//         <nav style={styles.navbar}>
//             <div>
//                 <Link to="/" style={styles.logo}>
//                     <img src={require("../images/logo.png")} alt="Roamio Logo" style={styles.logoImg} />
//                 </Link>
//             </div>
            // <ul style={styles.navbarUl}>
            //     <li style={styles.navbarUlLi}>
            //         <Link to="/" onMouseEnter={() => handleMouseEnter('home')}
            //             onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'home' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'home' ? '#222831' : '#EEEEEE' }} >Home</Link>
            //     </li>
            //     <li style={styles.navbarUlLi}>
            //         <Link to="/rice" onMouseEnter={() => handleMouseEnter('rice')}
            //             onMouseLeave={handleMouseLeave}
            //             style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'rice' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'rice' ? '#222831' : '#EEEEEE' }}>Rice</Link>
            //     </li>
            //     <li style={styles.navbarUlLi}>
            //         <Link to="/millets" onMouseEnter={() => handleMouseEnter('millets')}
            //             onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'millets' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'millets' ? '#222831' : '#EEEEEE' }} >Millets</Link>
            //     </li>
            //     <li style={styles.navbarUlLi}>
            //         <Link to="/powders" onMouseEnter={() => handleMouseEnter('powders')}
            //             onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'powders' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'powders' ? '#222831' : '#EEEEEE' }} >Powders</Link>
            //     </li>
            //     <li style={styles.navbarUlLi}>
            //         <Link to="/cart" onMouseEnter={() => handleMouseEnter('cart')}
            //             onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'cart' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'cart' ? '#222831' : '#EEEEEE' }}>
            //             Cart
            //             {cartItemCount > 0 && <span style={styles.cartCount}>{cartItemCount}</span>}
            //         </Link>
            //     </li>
            // </ul>
//             <div style={styles.btnContainer}>
//                 <button onClick={() => navigate('/contactus')} onMouseEnter={() => handleMouseEnter('contactus')}
//                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'contactus' ? '#222831' : '#EEEEEE', color: hoveredItem === 'contactus' ? '#EEEEEE' : '#222831' }}>
//                     Contact Us
//                 </button>
//                 <button onClick={() => navigate('/login')} onMouseEnter={() => handleMouseEnter('login')}
//                     onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'login' ? '#222831' : '#EEEEEE', color: hoveredItem === 'login' ? '#EEEEEE' : '#222831' }} >
//                     Login/Sign Up
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import logo from '../images/logo.png'; // Update this path according to your project structure

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-around;
//   background: linear-gradient(90deg, #00ADB5, #006F7B);
//   align-items: center;
//   height: 10vh;
//   font-family: 'Arial, Helvetica, sans-serif';
//   font-weight: bold;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 0 20px;
//   position: sticky;
//   top: 0;
//   z-index: 1000;
// `;

// const LogoImg = styled.img`
//   height: 6vw;
// `;

// const NavbarUl = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// const NavbarUlLi = styled.li`
//   margin: 0 10px;
// `;

// const NavbarUlLiA = styled(Link)`
//   display: block;
//   padding: 10px 20px;
//   border-radius: 10px;
//   text-decoration: none;
//   cursor: pointer;
//   color: #EEEEEE;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   background-color: ${({ isHovered }) => (isHovered ? '#EEEEEE' : 'transparent')};
//   color: ${({ isHovered }) => (isHovered ? '#222831' : '#EEEEEE')};
// `;

// const CartCount = styled.span`
//   background-color: red;
//   color: white;
//   border-radius: 50%;
//   width: 20px;
//   height: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 0;
//   right: 0;
//   font-size: 0.8rem;
// `;

// const BtnContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Btn = styled.button`
//   background-color: #00ADB5;
//   color: #EEEEEE;
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   margin-right: 10px;
//   &:hover {
//     background-color: #222831;
//   }
// `;

// function Navbar({ addToCart, cartItems }) {
//     const navigate = useNavigate();
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const handleMouseEnter = (itemId) => {
//         setHoveredItem(itemId);
//     };

//     const handleMouseLeave = () => {
//         setHoveredItem(null);
//     };

//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     return (
//         <NavbarContainer>
//             <div>
//                 <Link to="/">
//                     <LogoImg src={logo} alt="Roamio Logo" />
//                 </Link>
//             </div>
//             <NavbarUl>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/" 
//                           onMouseEnter={() => handleMouseEnter('home')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'home'}>Home</NavbarUlLiA>
//                 </NavbarUlLi>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/rice" 
//                           onMouseEnter={() => handleMouseEnter('rice')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'rice'}>Rice</NavbarUlLiA>
//                 </NavbarUlLi>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/millets" 
//                           onMouseEnter={() => handleMouseEnter('millets')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'millets'}>Millets</NavbarUlLiA>
//                 </NavbarUlLi>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/powders" 
//                           onMouseEnter={() => handleMouseEnter('powders')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'powders'}>Powders</NavbarUlLiA>
//                 </NavbarUlLi>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/cart" 
//                           onMouseEnter={() => handleMouseEnter('cart')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'cart'}>
//                         Cart
//                         {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
//                     </NavbarUlLiA>
//                 </NavbarUlLi>
//             </NavbarUl>
//             <BtnContainer>
//                 <Btn onClick={() => navigate('/contactus')} 
//                      onMouseEnter={() => handleMouseEnter('contactus')}
//                      onMouseLeave={handleMouseLeave}>Contact Us</Btn>
//                 <Btn onClick={() => navigate('/login')} 
//                      onMouseEnter={() => handleMouseEnter('login')}
//                      onMouseLeave={handleMouseLeave}>Login/Sign Up</Btn>
//             </BtnContainer>
//         </NavbarContainer>
//     );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import logo from '../images/logo.png'; // Update this path according to your project structure

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: linear-gradient(90deg, #00ADB5, #006F7B);
//   padding: 0 20px;
//   height: 70px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   font-family: 'Arial, Helvetica, sans-serif';
//   font-weight: bold;
// `;

// const LogoImg = styled.img`
//   height: 50px;
//   cursor: pointer;
// `;

// const NavbarUl = styled.ul`
//   display: flex;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavbarUlLi = styled.li`
//   margin: 0 15px;
// `;

// const NavbarUlLiA = styled(Link)`
//   padding: 10px 20px;
//   border-radius: 10px;
//   text-decoration: none;
//   color: #eeeeee;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   background-color: ${({ isHovered }) => (isHovered ? '#EEEEEE' : 'transparent')};
//   color: ${({ isHovered }) => (isHovered ? '#222831' : '#EEEEEE')};
//   &:hover {
//     background-color: #EEEEEE;
//     color: #222831;
//   }
// `;

// const CartIconContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
// `;

// const CartCount = styled.span`
//   background-color: red;
//   color: white;
//   border-radius: 50%;
//   width: 18px;
//   height: 18px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 0.7rem;
//   position: absolute;
//   top: -5px;
//   right: -10px;
// `;

// const BtnContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Btn = styled.button`
//   background-color: #00ADB5;
//   color: #EEEEEE;
//   border: 2px solid #EEEEEE;
//   border-radius: 20px;
//   padding: 8px 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
//   margin-right: 10px;
//   &:hover {
//     background-color: #EEEEEE;
//     color: #222831;
//     border: 2px solid #222831;
//   }
// `;

// function Navbar({ addToCart, cartItems }) {
//     const navigate = useNavigate();
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const handleMouseEnter = (itemId) => {
//         setHoveredItem(itemId);
//     };

//     const handleMouseLeave = () => {
//         setHoveredItem(null);
//     };

//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     return (
//         <NavbarContainer>
//             <Link to="/">
//                 <LogoImg src={logo} alt="Roamio Logo" />
//             </Link>
//             <NavbarUl>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/" 
//                           onMouseEnter={() => handleMouseEnter('home')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'home'}>Home</NavbarUlLiA>
//                 </NavbarUlLi>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/rice" 
//                           onMouseEnter={() => handleMouseEnter('rice')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'rice'}>Rice</NavbarUlLiA>
//                 </NavbarUlLi>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/millets" 
//                           onMouseEnter={() => handleMouseEnter('millets')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'millets'}>Millets</NavbarUlLiA>
//                 </NavbarUlLi>
//                 <NavbarUlLi>
//                     <NavbarUlLiA to="/powders" 
//                           onMouseEnter={() => handleMouseEnter('powders')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'powders'}>Powders</NavbarUlLiA>
//                 </NavbarUlLi>
//                 <NavbarUlLi>
//                     <CartIconContainer>
//                         <NavbarUlLiA to="/cart" 
//                           onMouseEnter={() => handleMouseEnter('cart')}
//                           onMouseLeave={handleMouseLeave}
//                           isHovered={hoveredItem === 'cart'}>
//                             Cart
//                         </NavbarUlLiA>
//                         {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
//                     </CartIconContainer>
//                 </NavbarUlLi>
//             </NavbarUl>
//             <BtnContainer>
//                 <Btn onClick={() => navigate('/contactus')} 
//                      onMouseEnter={() => handleMouseEnter('contactus')}
//                      onMouseLeave={handleMouseLeave}>Contact Us</Btn>
//                 <Btn onClick={() => navigate('/login')} 
//                      onMouseEnter={() => handleMouseEnter('login')}
//                      onMouseLeave={handleMouseLeave}>Login/Sign Up</Btn>
//             </BtnContainer>
//         </NavbarContainer>
//     );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import logo from '../images/logo.png'; // Update this path according to your project structure

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: linear-gradient(90deg, #00ADB5, #006F7B);
//   padding: 0 20px;
//   height: 70px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   font-family: 'Arial, Helvetica, sans-serif';
//   font-weight: bold;
// `;

// const LogoImg = styled.img`
//   height: 50px;
//   cursor: pointer;
// `;

// const NavbarUl = styled.ul`
//   display: flex;
//   align-items: center; /* Ensure items are centered */
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavbarUlLi = styled.li`
//   margin: 0 15px;
// `;

// const NavbarUlLiA = styled(Link)`
//   padding: 10px 20px;
//   border-radius: 10px;
//   text-decoration: none;
//   color: #eeeeee;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   background-color: ${({ isHovered }) => (isHovered ? '#EEEEEE' : 'transparent')};
//   color: ${({ isHovered }) => (isHovered ? '#222831' : '#EEEEEE')};
//   &:hover {
//     background-color: #EEEEEE;
//     color: #222831;
//   }
// `;

// const CartIconContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
// `;

// const CartCount = styled.span`
//   background-color: red;
//   color: white;
//   border-radius: 50%;
//   width: 18px;
//   height: 18px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 0.7rem;
//   position: absolute;
//   top: -5px;
//   right: -10px;
// `;

// const BtnContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Btn = styled.button`
//   background-color: #00ADB5;
//   color: #EEEEEE;
//   border: 2px solid #EEEEEE;
//   border-radius: 20px;
//   padding: 8px 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
//   margin-right: 10px;
//   &:hover {
//     background-color: #EEEEEE;
//     color: #222831;
//     border: 2px solid #222831;
//   }
// `;

// function Navbar({ addToCart, cartItems }) {
//   const navigate = useNavigate();
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleMouseEnter = (itemId) => {
//     setHoveredItem(itemId);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <NavbarContainer>
//       <Link to="/">
//         <LogoImg src={logo} alt="Roamio Logo" />
//       </Link>
//       <NavbarUl>
//         <NavbarUlLi>
//           <NavbarUlLiA
//             to="/"
//             onMouseEnter={() => handleMouseEnter('home')}
//             onMouseLeave={handleMouseLeave}
//             isHovered={hoveredItem === 'home'}
//           >
//             Home
//           </NavbarUlLiA>
//         </NavbarUlLi>
//         <NavbarUlLi>
//           <NavbarUlLiA
//             to="/rice"
//             onMouseEnter={() => handleMouseEnter('rice')}
//             onMouseLeave={handleMouseLeave}
//             isHovered={hoveredItem === 'rice'}
//           >
//             Rice
//           </NavbarUlLiA>
//         </NavbarUlLi>
//         <NavbarUlLi>
//           <NavbarUlLiA
//             to="/millets"
//             onMouseEnter={() => handleMouseEnter('millets')}
//             onMouseLeave={handleMouseLeave}
//             isHovered={hoveredItem === 'millets'}
//           >
//             Millets
//           </NavbarUlLiA>
//         </NavbarUlLi>
//         <NavbarUlLi>
//           <NavbarUlLiA
//             to="/powders"
//             onMouseEnter={() => handleMouseEnter('powders')}
//             onMouseLeave={handleMouseLeave}
//             isHovered={hoveredItem === 'powders'}
//           >
//             Powders
//           </NavbarUlLiA>
//         </NavbarUlLi>
//         <NavbarUlLi>
//           <CartIconContainer>
//             <NavbarUlLiA
//               to="/cart"
//               onMouseEnter={() => handleMouseEnter('cart')}
//               onMouseLeave={handleMouseLeave}
//               isHovered={hoveredItem === 'cart'}
//             >
//               Cart
//             </NavbarUlLiA>
//             {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
//           </CartIconContainer>
//         </NavbarUlLi>
//       </NavbarUl>
//       <BtnContainer>
//         <Btn
//           onClick={() => navigate('/contactus')}
//           onMouseEnter={() => handleMouseEnter('contactus')}
//           onMouseLeave={handleMouseLeave}
//         >
//           Contact Us
//         </Btn>
//         <Btn
//           onClick={() => navigate('/login')}
//           onMouseEnter={() => handleMouseEnter('login')}
//           onMouseLeave={handleMouseLeave}
//         >
//           Login/Sign Up
//         </Btn>
//       </BtnContainer>
//     </NavbarContainer>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import logo from '../images/logo.png'; 

// const link = document.createElement('link');
// link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
// link.rel = 'stylesheet';
// document.head.appendChild(link);

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: linear-gradient(90deg, #00ADB5, #006F7B);
//   padding: 0 20px;
//   height: 70px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   font-family: 'Roboto', Arial, Helvetica, sans-serif; /* Use Roboto font */
//   font-weight: bold;
// `;

// const LogoImg = styled.img`
//   height: 50px;
//   cursor: pointer;
// `;

// const NavbarUl = styled.ul`
//   display: flex;
//   align-items: center; /* Ensure items are centered */
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavbarUlLi = styled.li`
//   margin: 0 15px;
// `;

// const NavbarUlLiA = styled(Link)`
//   padding: 10px 20px;
//   border-radius: 10px;
//   text-decoration: none;
//   font-size: 1.2rem; /* Increase font size */
//   color: #eeeeee;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   background-color: ${({ isHovered }) => (isHovered ? '#EEEEEE' : 'transparent')};
//   color: ${({ isHovered }) => (isHovered ? '#222831' : '#EEEEEE')};
//   &:hover {
//     background-color: #EEEEEE;
//     color: #222831;
//   }
// `;

// const CartIconContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
// `;

// const CartCount = styled.span`
//   background-color: #FF5733;
//   color: #ffffff;
//   border-radius: 50%;
//   width: 18px;
//   height: 18px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 0.7rem;
//   position: absolute;
//   top: -5px;
//   right: -10px;
// `;

// const BtnContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Btn = styled.button`
//   background-color: #00ADB5;
//   color: #EEEEEE;
//   border: 2px solid #EEEEEE;
//   border-radius: 20px;
//   padding: 8px 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
//   margin-right: 10px;
//   font-family: 'Roboto', Arial, Helvetica, sans-serif; /* Use Roboto font */
//   &:hover {
//     background-color: #EEEEEE;
//     color: #222831;
//     border: 2px solid #222831;
//   }
// `;

// function Navbar({ addToCart, cartItems, setAlertMessage }) {
//   const navigate = useNavigate();
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleAddToCart = (item) => {
//     addToCart(item);
//     setAlertMessage(`${item.name} (${item.quantity} kg) added to cart!`);
//     setTimeout(() => {
//       setAlertMessage('');
//     }, 3000);
//   };


//   const handleMouseEnter = (itemId) => {
//     setHoveredItem(itemId);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <NavbarContainer>
//       <Link to="/">
//         <LogoImg src={logo} alt="Roamio Logo" />
//       </Link>
//       <NavbarUl>
//         <NavbarUlLi>
//           <NavbarUlLiA
//             to="/"
//             onMouseEnter={() => handleMouseEnter('home')}
//             onMouseLeave={handleMouseLeave}
//             isHovered={hoveredItem === 'home'}
//           >
//             Home
//           </NavbarUlLiA>
//         </NavbarUlLi>
//         <NavbarUlLi>
//           <NavbarUlLiA
//             to="/rice"
//             onMouseEnter={() => handleMouseEnter('rice')}
//             onMouseLeave={handleMouseLeave}
//             isHovered={hoveredItem === 'rice'}
//           >
//             Rice
//           </NavbarUlLiA>
//         </NavbarUlLi>
//         <NavbarUlLi>
//           <NavbarUlLiA
//             to="/millets"
//             onMouseEnter={() => handleMouseEnter('millets')}
//             onMouseLeave={handleMouseLeave}
//             isHovered={hoveredItem === 'millets'}
//           >
//             Millets
//           </NavbarUlLiA>
//         </NavbarUlLi>
//         <NavbarUlLi>
//           <NavbarUlLiA
//             to="/powders"
//             onMouseEnter={() => handleMouseEnter('powders')}
//             onMouseLeave={handleMouseLeave}
//             isHovered={hoveredItem === 'powders'}
//           >
//             Powders
//           </NavbarUlLiA>
//         </NavbarUlLi>
//         <NavbarUlLi>
//           <CartIconContainer>
//             <NavbarUlLiA
//               to="/cart"
//               onMouseEnter={() => handleMouseEnter('cart')}
//               onMouseLeave={handleMouseLeave}
//               isHovered={hoveredItem === 'cart'}
//             >
//               Cart
//             </NavbarUlLiA>
//             {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
//           </CartIconContainer>
//         </NavbarUlLi>
//       </NavbarUl>
//       <BtnContainer>
//         <Btn
//           onClick={() => navigate('/contactus')}
//           onMouseEnter={() => handleMouseEnter('contactus')}
//           onMouseLeave={handleMouseLeave}
//         >
//           Contact Us
//         </Btn>
//         <Btn
//           onClick={() => navigate('/login')}
//           onMouseEnter={() => handleMouseEnter('login')}
//           onMouseLeave={handleMouseLeave}
//         >
//           Login/Sign Up
//         </Btn>
//       </BtnContainer>
//     </NavbarContainer>
//     {alertMessage && (
//       <AlertContainer>
//         {alertMessage}
//       </AlertContainer>
//     )}
//   );
// }

// export default Navbar;

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
