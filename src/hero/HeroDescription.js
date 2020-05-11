import React, { Component } from "react";
import Social from "../social/Social";
import { v4 as uuidv4 } from 'uuid';

export default class HeroDescription extends Component {
  title = "Software Engineer at Zip";

  details = [
    `I'm a caffiene addict with far too many Raspberry PIs to be
      considered sane. When I'm not being a psychotic programmer or a
      borderline average musician, you can usually find me hanging
      around Auckland.`,
    `The main plan for this website is to be a dumping ground for any
      projects I feel confident in sharing with you :)`,
    `I'm usually pretty responsive on most social media sites. Head
      to these links if you need to contact me`,
  ];

  render() {

    const bioDescription = this.details.map((paragraph) => {
      return <p key={uuidv4()}className="normal-paragraph">{paragraph}</p>;
    });

    return (
      <div className="card-body d-flex flex-column">
        <h1>Scott Murray</h1>
        <h5 className="text-muted">{this.title}</h5>
        {bioDescription}
        <Social />
      </div>
    );
  }
}
