import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id}>
            <div className="cart-item">
            <div className="cart-item-name">
                 <img src={item.image} alt=""/>
                 <p>{item.name}</p>
              </div>
              <div className="item-weight"> {item.weight} kg </div>
              <div className="item-price">₹{item.totalPrice.toFixed(2)}</div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <div>Total:</div>
        <div className="total-price">₹{totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Cart;
