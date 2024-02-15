import React from "react";
import StrategyWave from "../../assets/Strategy_wave.png";
import StrategyImg from "../../assets/Strategy_img.png";
import Button from "../CommonComponent/Button";
import { FaChevronRight } from "react-icons/fa";
import "./Strategy.css";

const Strategy = () => {
  return (
    <>
      <section className="strategy">
        <div>
          <img src={StrategyWave} alt={StrategyWave} className="wave_img" />
        </div>

        <div className="container">
          <div className="strategy__wrapper">
            <div className="strategy__text">
              <h3 className="strategy__title">Why Lunar Strategy?</h3>
              <p className="strategy__description">
                To get customers, it's imperative to be seen by the mass. Every
                successful company is unique and needs contrasting digital
                marketing strategies. Book a meeting with us and we will help
                you find the correct strategy for your company.
              </p>
              <Button btn__style={"strategy__btn"}>
                Book Free Meeting <FaChevronRight />
              </Button>
            </div>
            <div className="strategy__rightImg">
              <div>
                <picture>
                  <img
                    src={StrategyImg}
                    alt={StrategyImg}
                    className="strategy__img"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;
