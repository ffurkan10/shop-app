import React from "react";
import { Product } from "../../components/Index";

const Home = ({ shop, handleClick, loading }) => {
  return (
    <div>
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <Product shop={shop} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Home;
