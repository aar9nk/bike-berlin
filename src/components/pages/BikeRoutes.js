import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Layout from "../Layout";
import "./BikeRoutes.css";

import Potsdam from "../images/Potsdam.jpg";
import Templehof from "../images/Templehof.jpg";
import CenterBerlin from "../images/CenterBerlin.jpg";
import Ring from "../images/Ring.jpg";

const routes = [
  {
    img: Potsdam,
    title: "Berlin - Potsdam",
    description: "1hr 52min",
    ride: "PotsdamRide",
  },
  {
    img: Templehof,
    title: "Berlin Tempelhof Airport",
    description: "30min",
    ride: "TemplehofRide",
  },
  {
    img: CenterBerlin,
    title: "The Sights",
    description: "41min",
    ride: "CenterRide",
  },
  {
    img: Ring,
    title: "Berlin's Ring",
    description: "1hr",
    ride: "RingRide",
  },
];

const renderRoutes = (h, setH) => {
  return routes.map(({ img, title, description, ride }, i) => {
    const hovered = h === i;
    return (
      <div className="Route" key={i} style={{ overflow: "hidden" }}>
        <Fade
          left={i % 2 !== 0 ? true : false}
          right={i % 2 === 0 ? true : false}
          delay={i * 100}
        >
          <div
            className="routesContainer"
            onMouseEnter={() => setH(i)}
            onMouseLeave={() => setH(null)}
          >
            <div
              className="routesBg"
              style={{
                background: `url(${img})`,
                backgroundSize: "cover",
                backgroundPostion: "center center",
                transform: `scale(${hovered ? "1.1" : "1"})`,
              }}
            />
            <div
              className="routesOverlay"
              style={{
                opacity: hovered ? 0 : 0.3,
              }}
            />
            <h4 className="routesTitle">{title}</h4>
            <p className="routesDescription">{description}</p>
            <Link to={ride}>
              <button className="linkbutton">See More</button>
            </Link>
          </div>
        </Fade>
      </div>
    );
  });
};

const Routes = () => {
  const [h, setH] = useState(null);
  return (
    <Layout>
      <div className="routesHeader">
        <h1>Ride Around the City</h1>
        <p>
          Here is a few of my favourite rides around the city. It will take you
          to Google Maps so you can plan your trip!
        </p>
      </div>

      <div className="routesList">{renderRoutes(h, setH)}</div>
    </Layout>
  );
};

export default Routes;
