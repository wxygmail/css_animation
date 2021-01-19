import React from "react";
import Loading from "./Loading";
import Text from "./Text";
import Map from "./Map";
import Fork from "./Fork";
import MixBlendMode from "./MixBlendMode";
import CircleJD from "./Circle_jindu";

const App = props => {
  return <div style={{
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
    flexWrap: "wrap"
  }}>
    <CircleJD />
    <MixBlendMode />
    <Fork />
    <Loading/>
    <Text/>
    <Map/>
  </div>
}

export default App;