import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, Navbar } from "./components/Index";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.scss";

const App = () => {
  const [shop, setShop] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);

    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product added");
    }
  };

  const handleRemove = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response);
      if (response.status === 200) {
        setShop(response.data);
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleDelete = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar cart={cart} />
        <div className="app__list">
          <ToastContainer style={{ marginTop: "50px" }} />
          <Routes>
            <Route
              path="/"
              element={
                <Home shop={shop} handleClick={handleClick} loading={loading} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleClick={handleClick}
                  handleRemove={handleRemove}
                  handleDelete={handleDelete}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
