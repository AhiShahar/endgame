import React from "react";
import PropTypes from "prop-types";

class Square extends React.Component {
  static propTypes = {
    black: PropTypes.bool
  };

  render() {
    const { black } = this.props;
    const fill = black ? "black" : "white";
    const stroke = black ? "white" : "black";

    return (
      <div
        style={{
          backgroundColor: fill,
          textAlign: "center",
          paddingTop: "15%",
          color: stroke,
          width: "100%",
          height: "100%"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Square;
