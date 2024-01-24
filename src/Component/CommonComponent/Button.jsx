import React from "react";

const Button = ({ btn__style, children }) => {
  return (
    <>
      <button className={btn__style}> {children} </button>
    </>
  );
};

export default Button;
