import React, { Component } from "react";

import "./Hero.css";
import MyFace from "../assets/me.jpg";
import HeroDescription from "./HeroDescription";

class Hero extends Component {


  render() {

    return (
      <div className="container">
        <div className="card-body main-card">
          <div id="content-card" className="card flex-md-row">
            <img alt="Scott Murray's face" className="me-img card-body md-4" src={MyFace} align="left" />
            <HeroDescription/>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
