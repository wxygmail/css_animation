import React from "react";
import "./index.scss"
const SquareBackground = props => {
  return <div className="square">
    {props.children}
  </div>
}
export default SquareBackground;