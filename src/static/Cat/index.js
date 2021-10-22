import React from 'react';
import "./index.scss";
import SquareBackground from "../../components/squareBackground";

export default () => {
  return <SquareBackground>
    <div className="cat_container">
      <div className="cat">
        <div className="mask"></div>
        <div className="cat-left-face"></div>
        <div className="cat-right-face"></div>
        <div className="ear-left"></div>
        <div className="ear-right"></div>
        <div className="eye-left"></div>
        <div className="eye-right"></div>
        <div className="bizi">

        </div>
      </div>
    </div>

  </SquareBackground>
}
