import React from 'react';
import SquareBackground from "../../components/squareBackground";
import "./index.scss";

const SquareRotation = () => {
    return (
        <SquareBackground>
            <div className="sq-rotation">
                <div className="wrap">
                    <div className="top">top</div>
                    <div className="bottom">bottom</div>
                    <div className="left">left</div>
                    <div className="right">right</div>
                    <div className="front">front</div>
                    <div className="back">back</div>
                </div>
            </div>

        </SquareBackground>
    );
};

export default SquareRotation;
