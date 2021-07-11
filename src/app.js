import React from "react";
import Loading from "./dynamic/Loading";
import Text from "./dynamic/Text";
import Map from "./static/Map";
import Fork from "./static/Fork";
import MixBlendMode from "./dynamic/MixBlendMode";
import CircleJD from "./dynamic/Circle_jindu";
import SquareRotation from "./dynamic/SquareRotation";
import LineYunDong from "./dynamic/Line_yundong";

const App = props => {
  return <div style={{
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
    flexWrap: "wrap"
  }}>
    <LineYunDong />
    <SquareRotation />
    <CircleJD />
    <MixBlendMode />
    <Fork />
    <Loading/>
    <Text/>
    {/*获取百度ak,放置到index.html文件，再打开此组件*/}
    <Map/>
  </div>
}

export default App;
