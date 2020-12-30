import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__text">&copy; Lucía Mezquida</small>
      <nav>
        <ul className="footer__media">
          <li>
            <a
              href="//github.com/LuciaMezquida"
              target="_blank"
              title="Github"
              className="footer__media--github"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a
              href="//www.linkedin.com/in/luciamezquidajuan/"
              target="_blank"
              title="Linkedin"
              className="footer__media--linkedin"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="//twitter.com/LuciCodes"
              target="_blank"
              title="Twitter"
              className="footer__media--twitter"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default React.memo(Footer);
