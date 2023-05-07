import React from "react";
import { useSelector } from "react-redux";
import ProdCard from "./ProdCard";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.pd.products);
  return (
    <>
      <Link to="/">Go back</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((prod) => (
          <ProdCard propsprod={prod} key={prod.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;