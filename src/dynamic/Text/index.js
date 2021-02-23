import React from "react";
import SquareBackground from "../../components/squareBackground";
import "./index.scss";

const Text = props => {
  return <SquareBackground>
    <div className="text-bg">
      <span>GOOGLE 天官赐福，百无禁忌</span>
    </div>
  </SquareBackground>;
};

export default Text;
