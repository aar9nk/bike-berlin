import React from "react";
import Layout from "../../Layout";
import "./ride.css";
import Templehof from "../../images/Templehof.jpg";

const TemplehofRide = ({ image }) => {
  return (
    <Layout>
      <div className="rideContainer">
        <h1>Berlin Templehof</h1>
        <div className="rideText">
          <p>
            Flughafen Templehof has so much history it would be a shame to miss
            out! Tempelhof Airport closed all operations on 30 October 2008, and
            is now a park for everyone to use and enjoy.
            <br />
            <br />
            This is perfect to ride around as the park is actually quite large.
            The disused runway is an experience that you won’t get very often.{" "}
            <br />
            <br />
            There is many entrances and some are close to the U-Bahn stations,
            there is bound to be some bikes to hire around the entrances.
          </p>
        </div>
        <a
          href="https://goo.gl/maps/2xeeKNjFCBBBLy7P6"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="linkbutton">Google Maps</button>
        </a>
        <div className="rideImageBox">
          <img src={Templehof} alt="Templehof" />
        </div>
      </div>
    </Layout>
  );
};
export default TemplehofRide;
