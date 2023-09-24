import React from "react";
import "./product.css"

const Product = ({ name, price, description }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: Rs{price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Product;
