import React from "react";
import FooterBg from "../../assets/Footer.png";
import FooterLogo from "../../assets/FooterLogo.png";

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
