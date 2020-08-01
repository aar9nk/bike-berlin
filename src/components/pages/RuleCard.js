import React, { Fragment } from "react";

const RuleCard = ({ title, description }) => {
  return (
    <Fragment>
      <div
        className="card"
        style={{ padding: "20px", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="cardTitle">
          <h3>{title}</h3>
        </div>
        <div className="cardText">
          <p>{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default RuleCard;
