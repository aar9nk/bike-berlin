import React from "react";
import Layout from "../../Layout";
import "./ride.css";
import CenterBerlin from "../../images/CenterBerlin.jpg";

const CenterRide = ({ image }) => {
  return (
    <Layout>
      <div className="rideContainer">
        <h1>Berlin City Sights</h1>
        <div className="rideText">
          <p>
            Not quite the Ring Bahn, however a ride around the city is perfect
            for a day or night tour. There is mostly cycle paths and with wider
            streets you will be going pretty quick.
            <br />
            <br />
            There is plenty to see and do along the way so look up some cool
            spots for food or sightseeing!
          </p>
        </div>
        <a
          href="https://goo.gl/maps/fxExFLV5KahrTk5s6"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="linkbutton">Google Maps</button>
        </a>
        <div className="rideImageBox">
          <img src={CenterBerlin} alt="Berlin City" />
        </div>
      </div>
    </Layout>
  );
};
export default CenterRide;
