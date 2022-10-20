import React from "react";

const Cart = ({ cart, handleClick, handleRemove, handleDelete }) => {
  const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart">
      <div className="cart__header">
        <h2>Cart Items</h2>
        {cart.length > 0 && <button onClick={handleDelete}>Clear Cart</button>}
      </div>
      {cart.length === 0 && <div>No items are added.</div>}
      {cart.map((item) => (
        <div className="cart__box" key={item.id}>
          <div className="cart__box__img">
            <img src={item.image} alt="" />
            <strong>
              {" "}
              <p>{item.title}</p>
            </strong>
          </div>
          <div className="cart__box__function">
            <button
              className="cart__box__function__add"
              onClick={() => handleClick(item)}
            >
              +
            </button>
            <button
              className="cart__box__function__remove"
              onClick={() => handleRemove(item)}
            >
              -
            </button>
          </div>
          <div className="cart__box__price">
            {item.quantity} * ${item.price}
          </div>
        </div>
      ))}
      <div className="cart__total">
        <h3>Total Price</h3>
        <div className="cart__total__price">
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
