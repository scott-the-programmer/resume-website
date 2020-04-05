import React, { Component } from "react";

import "./Social.css";

class Social extends Component {
  render() {
    return (
      <ul className="social-list">
        <li className="social-svg">
          <a href="https://www.github.com/scott-the-programmer">
            <img
              height="40"
              width="40"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
            />
          </a>
        </li>
        <li className="social-svg">
          <a href="https://www.twitter.com/ScottProgrammer">
            <img
              height="40"
              width="40"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
            />
          </a>
        </li>
        <li className="social-svg">
          <a href="https://www.instagram.com/shxppingtrxllxy/">
            <img
              height="40"
              width="40"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
            />
          </a>
        </li>
        <li className="social-svg">
          <a href="https://www.linkedin.com/in/scottalexandermurray/">
            <img
              height="40"
              width="40"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
            />
          </a>
        </li>
      </ul>
    );
  }
}

export default Social;
