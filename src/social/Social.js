import React, { Component } from "react";

import "./Social.css";
import SocialIcon from "./SocialIcon";
import { v4 as uuidv4 } from 'uuid';


class Social extends Component {
  socialLinks = [
    {
      site: "github",
      socialLink: "https://www.github.com/scott-the-programmer/",
      svgLocation:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg",
    },
    {
      site: "twitter",
      socialLink: "https://www.twitter.com/ScottProgrammer/",
      svgLocation:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg",
    },
    {
      site: "instagram",
      socialLink: "https://www.instagram.com/shxppingtrxllxy/",
      svgLocation:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg",
    },
    {
      site: "linkedin",
      socialLink: "https://www.linkedin.com/in/scottalexandermurray/",
      svgLocation:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg",
    },
  ];

  render() {
    const renderedLinks = this.socialLinks.map(link => {
      return (<SocialIcon key={uuidv4()} site={link.site} socialLink={link.socialLink} svgLocation={link.svgLocation}/>)
    })
    return (
      <ul className="social-list">
        {renderedLinks}
      </ul>
    );
  }
}

export default Social;
