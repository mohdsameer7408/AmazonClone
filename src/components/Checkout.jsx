import React from "react";
import "../assets/css/Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad by amazon"
          className="checkout_ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          {!user && <h3>You must be signed in to process your orders!</h3>}
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id * Math.random()}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal basket={basket} user={user} />
      </div>
    </div>
  );
}

export default Checkout;
