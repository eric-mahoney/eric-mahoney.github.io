import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <ul className="footer-links">
          <li className="footer-link">
            <a href="https://codepen.io/ericmahoney" target="_blank">
              codepen
            </a>
          </li>
          <li className="footer-link">
            <a href="https://github.com/eric-mahoney" target="_blank">
              github
            </a>
          </li>
          <li className="footer-link">
            <a href="https://gitlab.com/ericmahoney" target="_blank">
              gitlab
            </a>
          </li>
          <li className="footer-link">
            <a href="https://www.linkedin.com/in/eric-mahoney22/" target="_blank">
              linkedin
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Footer;
