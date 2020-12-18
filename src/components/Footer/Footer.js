import React from "react";
import "./Footer.scss";

const Footer = () => {
  console.log("render footer");
  return (
    <footer className="footer">
      <small className="footer__text">Created by Lucía Mezquida</small>
    </footer>
  );
};

export default React.memo(Footer);
