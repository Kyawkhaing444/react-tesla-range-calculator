import React from "react";
import PropTypes from "react";
import "./TeslaStats.css";

const TeslaStats = (props) => {
  const listItems = props.carstats.map((stats) => (
    <li>
      <div
        className={
          "tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}"
        }
      ></div>
      <p>{stats.miles}</p>
    </li>
  ));
  return (
    <div className="tesla-stats">
      <ul>{listItems}</ul>
    </div>
  );
};

TeslaStats.prototypes = {
  carstats: PropTypes.array,
};

export default TeslaStats;
