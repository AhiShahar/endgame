import React from "react";
import PropTypes from "prop-types";

export default class Troop extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    type: PropTypes.string
  };

  render() {
    return (
      <img
        src={`/assets/${this.props.color}${this.props.type}.png`}
        alt={`${this.props.color}${this.props.type}`}
      />
    );
  }
}
