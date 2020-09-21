import React from "react";
import "../assets/css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketItems, getBasketItemsTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal({ basket, user }) {
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({getBasketItems(basket)} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketItemsTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button
        disabled={!basket.length}
        onClick={(e) =>
          !user ? history.push("/login") : history.push("/payment")
        }
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
