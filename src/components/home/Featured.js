import React, { Component } from "react";
import BerlinImage from "../images/Berlin1.jpg";

export default class Featured extends Component {
  render() {
    return (
      <section className="featured">
        <div
          style={{
            backgroundColor: "rgb(245, 245, 245)",
            height: "100%",
            background: `url(${BerlinImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            opacity: 0.8,
          }}
        >
          <p>
            Here are some things I came across as an English speaker riding
            through the city.
          </p>
        </div>
      </section>
    );
  }
}
