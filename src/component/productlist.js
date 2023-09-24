import React from "react";
import "./product.css";
import Product from "./product";

const ProductList = (props) => {
  return (
    <div className="container">
      {props.products.map((product, index) => (
        <Product
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
