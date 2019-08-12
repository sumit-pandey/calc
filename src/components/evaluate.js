import React from "react";
import "./evaluate.css";

const Equal = props => {
  return (
    <div className="equal" onClick={props.addInput}>
      =
    </div>
  );
};
export default Equal;
