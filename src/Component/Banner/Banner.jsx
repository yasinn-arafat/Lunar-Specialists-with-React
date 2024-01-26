import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner__content">
            <h1 className="banner__title">Lunar Specialists</h1>
            <p className="banner__details">
              Meet the awesome team behind Lunar Strategy.
            </p>
          </div>
        </div>

        <div className="banner__img">
          <picture>
            <img
              src="../src/assets/Wave.png"
              alt="../src/assets/Wave.png"
              className="Wave__img"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Banner;
