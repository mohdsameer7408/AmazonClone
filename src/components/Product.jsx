import React from "react";
import "../assets/css/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating, setDismissible }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      task: "ADD",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    setDismissible(`${title.slice(0, 20)}... was added to your cart!`);
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="book" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
