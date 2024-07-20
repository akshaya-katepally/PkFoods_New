// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './Home';
// import Contactus from './components/Contactus';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Footer from './components/Footer';
// import RiceList from './RiceList';
// import MilletList from './MilletList';
// import PowderList from './PowderList';
// import CartPage from './CartPage';
// import ItemDetailsPage from './ItemDetailsPage';
// import milletData from './milletData';
// import riceData from './riceData';
// import powderData from './powderData';

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [alertMessage, setAlertMessage] = useState('');

//   const addToCart = (item) => {
//     const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
//     if (existingItemIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingItemIndex].quantity += item.quantity;
//       updatedCartItems[existingItemIndex].totalPrice += item.totalPrice;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, item]);
//     }
//     setAlertMessage(`${item.name} (${item.quantity} kg) added to cart!`);
//     setTimeout(() => {
//       setAlertMessage('');
//     }, 5000);
//   };

//   const data = {
//     rice: riceData,
//     millet: milletData,
//     powder: powderData,
//   };

//   return (
//     <Router>
//       <Navbar alertMessage={alertMessage} addToCart={addToCart} cartItems={cartItems} />
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contactus" element={<Contactus />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/rice" element={<RiceList addToCart={addToCart} riceData={riceData} />} />
//           <Route path="/millets" element={<MilletList addToCart={addToCart} />} />
//           <Route path="/powders" element={<PowderList addToCart={addToCart} />} />
//           <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
//           <Route path="/:category/:id" element={<ItemDetailsPage data={data} addToCart={addToCart} />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Contactus from './components/Contactus';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import RiceList from './RiceList';
import MilletList from './MilletList';
import PowderList from './PowderList';
import CartPage from './CartPage';
import ItemDetailsPage from './ItemDetailsPage';
import milletData from './milletData';
import riceData from './riceData';
import powderData from './powderData';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      updatedCartItems[existingItemIndex].totalPrice += item.totalPrice;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
    setAlertMessage(`${item.name} (${item.quantity} kg) added to cart!`);
    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  };

  const data = {
    rice: riceData,
    millet: milletData,
    powder: powderData,
  };

  return (
    <Router>
      <Navbar alertMessage={alertMessage} addToCart={addToCart} cartItems={cartItems} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rice" element={<RiceList addToCart={addToCart} riceData={riceData} />} />
          <Route path="/millets" element={<MilletList addToCart={addToCart} />} />
          <Route path="/powders" element={<PowderList addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route path="/:category/:id" element={<ItemDetailsPage data={data} addToCart={addToCart} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
