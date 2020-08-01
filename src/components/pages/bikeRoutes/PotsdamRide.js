import React from "react";
import Layout from "../../Layout";
import "./ride.css";
import Potsdam from "../../images/Potsdam.jpg";

const PotsdamRide = ({ image }) => {
  return (
    <Layout>
      <div className="rideContainer">
        <h1>Berlin - Potsdam</h1>
        <div className="rideText">
          <p>
            This is a long day ride, however it is definitely worth it! Through
            the Tiergarten and parts of Grunewald make this a stunning ride.
            <br />
            <br />
            Riding by the water is perfect for summer and once you cross over to
            Potsdam itself, it is a spectacular sight.
            <br />
            <br />
            There is plenty to see in Potsdam so check out the old parts of town
            and then a cafe and head home.
            <br />
            <br />
            If you only want to ride one way, the S7 will take you back to the
            city.
          </p>
        </div>
        <a
          href="https://goo.gl/maps/cvb5vdc8NX1MGS9S6"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="linkbutton">Google Maps</button>
        </a>
        <div className="rideImageBox">
          <img src={Potsdam} alt="Potsdam" />
        </div>
      </div>
    </Layout>
  );
};
export default PotsdamRide;
