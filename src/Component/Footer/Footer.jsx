import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footerWraper">
            <div>
              <picture>
                <img src={FooterLogo} alt={FooterLogo} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
