import React from "react";
import "./button.css";
const Button = props => (
  <div className="btn" onClick={props.handleClick}>
    {props.children}
  </div>
);
export default Button;
