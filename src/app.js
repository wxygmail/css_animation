import React from "react";
import Loading from "./loading";
import Text from "./text";
import Map from "./Map";

const App = props => {
  return <div style={{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "50px"
  }}>
    <Loading/>
    <Text />
    <Map />
  </div>
}

export default App;