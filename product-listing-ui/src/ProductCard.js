import React from "react";

export default function ProductCard({ product }) {
  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} width="100%" />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <button>Add to Cart</button>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center"
};