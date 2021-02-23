import React from "react";
import './index.scss';
import SquareBackground from "../../components/squareBackground"

const Loading = () => {
  return <SquareBackground>
    <div className="loading-content"></div>
  </SquareBackground>;
};
export default Loading;
