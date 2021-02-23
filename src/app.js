import React from "react";
import Loading from "./dynamic/Loading";
import Text from "./dynamic/Text";
import Map from "./static/Map";
import Fork from "./static/Fork";
import MixBlendMode from "./dynamic/MixBlendMode";
import CircleJD from "./dynamic/Circle_jindu";
import Testing from "./testing";
import SquareRotation from "./dynamic/SquareRotation";

const App = props => {
  return <div style={{
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
    flexWrap: "wrap"
  }}>
    <SquareRotation />
    <CircleJD />
    <MixBlendMode />
    <Fork />
    <Loading/>
    <Text/>
    <Map/>
  </div>
}

export default App;
