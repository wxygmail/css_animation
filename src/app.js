import React from "react";
import Loading from "./loading";
import Text from "./text";

const App = props => {
  return <div style={{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "50px"
  }}>
    <Loading/>
    <Text />
  </div>
}

export default App;