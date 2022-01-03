import React from "react";
import { connect } from "react-redux";
function Decrement(props) {
  return (
    <div>
      <button onClick={props.onDecrement}>Decrement -</button>
    </div>
  );
}

const mapDispachToProps = (dispach) => {
  return {
    onDecrement: () => {
      dispach({ type: "DECREMENT" });
    },
  };
};

export default connect(null, mapDispachToProps)(Decrement);
