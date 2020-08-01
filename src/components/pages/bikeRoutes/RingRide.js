import React from "react";
import Layout from "../../Layout";
import "./ride.css";
import Ring from "../../images/Ring.jpg";

const RingRide = ({ image }) => {
  return (
    <Layout>
      <div className="rideContainer">
        <h1>Berlin's Ring</h1>
        <div className="rideText">
          <p>
            Berlin has way too many museums and tourist destinations. Pick some
            you like the look of and take your bike! This ride will take past
            some classics and Berlin itself is quite flat so it will make for a
            nice day of travelling. <br />
            <br />
            The good part about riding through the center is that there is no
            cobblestone streets! Riding across the bridges in summer is a
            perfect way to spend the day!
          </p>
        </div>
        <a
          href="https://goo.gl/maps/bLVVuPrBPdpMwTPn9"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="linkbutton">Google Maps</button>
        </a>
        <div className="rideImageBox">
          <img src={Ring} alt="Berlin City" />
        </div>
      </div>
    </Layout>
  );
};
export default RingRide;
