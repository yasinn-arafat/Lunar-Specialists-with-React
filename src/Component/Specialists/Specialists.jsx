import React from "react";
import Card from "../CommonComponent/Card";
import Button from "../CommonComponent/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Specialists.css";

const Specialists = () => {
  return (
    <>
      <div className="specialists">
        <div className="container">
          <div className="specialistsWraper">
            <Card
              className="card"
              card__title="sp__title"
              cardTitle="Tim Haldorsson"
              card__details="sp__details"
              cardDetails="Paid Search Manager"
              card__email="sp__email"
              cardEmail="Gothenburg, Sweden
              tim@lunarstrategy.com"
            >
              <Button btn__style="sp__btn">
                Book a free meeting <MdKeyboardArrowRight />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialists;
