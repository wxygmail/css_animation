import React from "react";
import Loading from "./loading";
import Text from "./text";
import Map from "./Map";
import Fork from "./fork";

const App = props => {
  return <div style={{
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
    flexWrap: "wrap"
  }}>
    <Fork />
    <Loading/>
    <Text/>
    <Map/>
  </div>
}

export default App;