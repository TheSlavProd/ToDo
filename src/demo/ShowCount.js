import React from "react";
import { connect } from "react-redux";
function ShowCount(props) {
  return (
    <div>
      Count: {props.count} Message: {props.message}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    count: state.count,
    message: state.message,
  };
};

export default connect(mapStateToProps, null)(ShowCount);
