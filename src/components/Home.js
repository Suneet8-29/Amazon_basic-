import React from "react";
import "./Home.css";
import image from "../images/home.jpg";
import Product from "./Product";
import insta360 from "../images/insta360.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={image} alt="home" />

        <div className="home__row">
          <Product
            title="INSTA360 ONE R Twin Edition"
            image={insta360}
            price={29.99}
            rating={3}
          ></Product>
          <Product
            title="INSTA360 ONE R Twin Edition"
            image={insta360}
            price={29.99}
            rating={3}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="INSTA360 ONE R Twin Edition"
            image={insta360}
            price={29.99}
            rating={3}
          ></Product>
          <Product
            title="INSTA360 ONE R Twin Edition"
            image={insta360}
            price={29.99}
            rating={3}
          ></Product>
          <Product
            title="INSTA360 ONE R Twin Edition"
            image={insta360}
            price={29.99}
            rating={3}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="INSTA360 ONE R Twin Edition"
            image={insta360}
            price={29.99}
            rating={3}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
