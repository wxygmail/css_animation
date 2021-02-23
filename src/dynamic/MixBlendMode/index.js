import React from 'react';
import "./index.scss";
import SquareBackground from "../../components/squareBackground";

const MixBlendMode = () => {
  return <SquareBackground>
    <div className="box box1"></div>
    <div className="box box2"></div>
    <div className="box box3"></div>
  </SquareBackground>
};

export default MixBlendMode;
