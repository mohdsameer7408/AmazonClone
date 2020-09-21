import React from "react";
import "../assets/css/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  quantity,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id,
      },
    });
  };

  const incrementBasketItem = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      task: "ADD",
      item: {
        id,
      },
    });
  };
  const decrementBasketItem = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      task: "Remove",
      item: {
        id,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        src={image}
        alt="a product in your basket"
        className="checkoutProduct_image"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="increment_decrement">
          {!hideButton && (
            <button
              className="quantity_button"
              onClick={quantity === 1 ? removeFromBasket : decrementBasketItem}
            >
              -
            </button>
          )}
          <strong className="quantity">{quantity}</strong>
          {!hideButton && (
            <button className="quantity_button" onClick={incrementBasketItem}>
              +
            </button>
          )}
        </div>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
