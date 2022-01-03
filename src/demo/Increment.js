import React from "react";
import { connect } from "react-redux";
function Increment(props) {
  return (
    <div>
      <button onClick={props.onIncrement}>Increment +</button>
    </div>
  );
}

const mapDispachToProps = (dispach) => {
  return {
    onIncrement: () => {
      dispach({ type: "INCREMENT" });
    },
  };
};

export default connect(null, mapDispachToProps)(Increment);
