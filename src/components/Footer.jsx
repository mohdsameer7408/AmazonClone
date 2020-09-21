import React from "react";
import "../assets/css/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <span>
        &copy; 2020 &ndash; {year} Amazon-Clone, made with ❤️ by Mohd Sameer
        Ahmad
      </span>
    </div>
  );
}

export default Footer;
