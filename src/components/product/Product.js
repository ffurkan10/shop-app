import React from "react";

const Product = ({ shop, handleClick }) => {
  const setRoteClass = (vote) => {
    if (vote >= 4) {
      return "green";
    } else if (vote >= 3) {
      return "yellow";
    } else {
      return "red";
    }
  };
  return (
    <div className="shopList">
      {shop.map((items) => (
        <div key={items.id} className="shop">
          <div className="shop__card">
            <div className="shop__card__img">
              <img src={items.image} alt="" />
            </div>
            <div className="shop__card__title">
              <span>
                <strong>{items.title}</strong>
              </span>
              <span>({items.category})</span>
            </div>
            <div className="shop__card__price">
              <span>${items.price}</span>
            </div>
            <div className="shop__card__text">
              <span className={`rate ${setRoteClass(items?.rating?.rate)}`}>
                {items?.rating?.rate}
              </span>
              <span>Count ({items?.rating?.count})</span>
            </div>
            <div className="shop__card__btn">
              <button onClick={() => handleClick(items)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
