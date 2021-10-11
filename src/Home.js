import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3740_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Win (Windsor Horne Lockwood III Book 1)"
            price={14.55}
            image="https://images-na.ssl-images-amazon.com/images/I/415TAth-PAL._AC_SX184_.jpg"
            rating={4}
          ></Product>
          <Product price={20}></Product>
        </div>
        <div className="home__row">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          <Product></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
