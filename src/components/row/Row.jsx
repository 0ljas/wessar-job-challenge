import React from "react";
import "./Row.scss";

const Row = ({ left, right }) => {
  return (
    <div className="Row">
      <div className="Row__column">{left}</div>
      <div className="Row__column">{right}</div>
    </div>
  );
};

export default Row;
