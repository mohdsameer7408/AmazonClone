import React, { useState } from "react";
import "../assets/css/Home.css";
import Product from "./Product";

function Home() {
  const [dismissible, setDismissible] = useState([]);

  const handleDismissibles = (title) => {
    setDismissible([...dismissible, title]);
    setTimeout(() => {
      setDismissible([]);
    }, 2000);
  };

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon-banner"
        />
        <div className="home_row">
          <Product
            id={1}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
            rating={5}
            setDismissible={handleDismissibles}
          />
          <Product
            id={2}
            title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for phone-call and Alexa voice control, Black"
            price={348.23}
            image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
            rating={4}
            setDismissible={handleDismissibles}
          />
        </div>
        <div className="home_row">
          <Product
            id={3}
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            price={109.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY879_.jpg"
            rating={5}
            setDismissible={handleDismissibles}
          />
          <Product
            id={4}
            title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
            rating={5}
            setDismissible={handleDismissibles}
          />
          <Product
            id={5}
            title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD"
            price={1183.89}
            image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
            rating={4}
            setDismissible={handleDismissibles}
          />
        </div>
        <div className="home_row">
          <Product
            id={6}
            title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI"
            price={1348.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg"
            rating={5}
            setDismissible={handleDismissibles}
          />
        </div>
      </div>
      {dismissible.length > 0 && (
        <div className="dismissibles">
          {dismissible.map((title) => (
            <p key={Math.random() * 3}>{title}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
