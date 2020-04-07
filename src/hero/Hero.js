import React, { Component } from "react";

import "./Hero.css";
import MyFace from "../assets/me.jpg";
import Social from "../social/Social";

class Hero extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-body main-card">
          <div id="content-card" className="card flex-md-row">
            <img alt="Scott Murray's face" className="me-img card-body md-4" src={MyFace} align="left" />
            <div className="card-body d-flex flex-column">
              <h1>Scott Murray</h1>
              <h5 className="text-muted">Software Engineer at Zip</h5>
              <p className="normal-paragraph">
                I'm a caffiene addict with far too many Raspberry PIs to be
                considered sane. When I'm not being a psychotic programmer or a
                borderline average musician, you can usually find me hanging
                around Auckland.
              </p>
              <p className="normal-paragraph">
                The main plan for this website is to be a dumping ground for any
                projects I feel confident in sharing with you :)
              </p>
              <p className="normal-paragraph">
                I'm usually pretty responsive on most social media sites. Head
                to these links if you need to contact me
              </p>
              <Social />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
