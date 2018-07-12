import "./update.scss";
import React from "react";
import PropTypes from "prop-types";

const Square = ({ winner }) => {
  if (!winner) return null;
  return (
    <div className="update">
      <span className="update-context">{winner} wins !!!</span>
      <div className="display-game" />
    </div>
  );
};

export default Square;
