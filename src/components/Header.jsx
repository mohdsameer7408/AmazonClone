import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import Logo from "../assets/images/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../config/firebase";
import { getBasketItems } from "../reducer";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [burger, setBurger] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const toggleNavbar = () => {
    setBurger((prevBurger) => !prevBurger);
  };

  return (
    <div className={burger ? "header" : "header h_nav"}>
      <Link to="/" className="home_link">
        <img src={Logo} alt="amazon logo" className="header_logo" />
      </Link>
      <div className="header_search">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search amazon"
          className="header_searchInput"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className={burger ? "header_nav" : "header_nav visibility"}>
        <Link to={!user ? "/login" : "/"} className="link">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_lineOne">
              Hello {user ? user.email : "User"}
            </span>
            <span className="header_lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="link">
          <div className="header_option">
            <span className="header_lineOne">Returns</span>
            <span className="header_lineTwo">& Orders</span>
          </div>
        </Link>
        <div>
          <div className="header_option">
            <span className="header_lineOne">Your</span>
            <span className="header_lineTwo">Prime</span>
          </div>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_lineTwo header_basketCount">
            {getBasketItems(basket)}
          </span>
        </div>
      </Link>
      <div className="burger" onClick={toggleNavbar}>
        <div className={burger ? "line first-line" : "line"}></div>
        <div className={burger ? "line hidden" : "line"}></div>
        <div className={burger ? "line third-line" : "line"}></div>
      </div>
    </div>
  );
}

export default Header;
