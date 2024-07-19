import React from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailsPage.css';

function ItemDetailsPage({ data, addToCart }) {
  const { category, id } = useParams();
  const item = data[category]?.find(item => item.id === parseInt(id));
  const [quantity, setQuantity] = React.useState(1);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...item, quantity: 1, totalPrice: item.price });
  };

  return (
    <div className="item-details">
      <div className="image-container">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="details-container">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Price: ₹{item.price.toFixed(2)}/kg</p>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <select id="quantity" value={quantity} onChange={handleQuantityChange}>
            {[1, 2, 3, 4, 5, 10, 15, 20, 25].map((value) => (
              <option key={value} value={value}>{value} kg</option>
            ))}
          </select>
        </div>
        <p>Total Price: ₹{(item.price * quantity).toFixed(2)}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
