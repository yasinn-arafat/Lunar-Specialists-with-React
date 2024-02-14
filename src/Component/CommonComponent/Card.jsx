import React from "react";

const Card = ({
  className,
  MenImg,
  card__img,
  card__title,
  card__details,
  card__email,
  children,
  cardTitle,
  cardDetails,
  cardEmail,
}) => {
  return (
    <>
      <div className={className}>
        <div>
          <picture>
            <img src={MenImg} alt={MenImg} className={card__img} />
          </picture>
        </div>

        <h3 className={card__title}>
          {cardTitle ? cardTitle : `Tim Haldorsson`}
        </h3>
        <p className={card__details}>
          {cardDetails ? cardDetails : `Paid Search Manager`}
        </p>
        <p className={card__email}>
          {cardEmail
            ? cardEmail
            : `Gothenburg, Sweden 
            tim@lunarstrategy.com`}
        </p>
        {children}
      </div>
    </>
  );
};

export default Card;
