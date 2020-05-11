import React, { Component } from "react";

class SocialIcon extends Component {
  site;
  socialLink;
  svgLocation;

  constructor(props) {
    super(props);
    this.site = props.site;
    this.socialLink = props.socialLink;
    this.svgLocation = props.svgLocation;
  }

  render() {
    return (
      <li className="social-svg">
        <a href={this.socialLink} title={this.site}>
          <img
            alt={this.site + " icon"}
            height="40"
            width="40"
            src={this.svgLocation}
          />
        </a>
      </li>
    );
  }
}

export default SocialIcon
