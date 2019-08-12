import React from "react";
import "./clearbutton.css";
import { tsPropertySignature } from "@babel/types";

const Clearbutton = props => (
  <div className="clear" onClick={props.handleClear}>
    clear
  </div>
);
export default Clearbutton;
