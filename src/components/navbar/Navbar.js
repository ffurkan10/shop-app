import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <h2>Shopping Center</h2>
        </Link>

        <div className="navbar__container__cart">
          <Link to="/cart">
            <button>
              <BsCartPlus />
            </button>
          </Link>
          <span> {cart.length === 0 ? "0" : cart.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
