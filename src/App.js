import React, { Component } from "react";
import Choice from "./Choice";

// calling all components
class App extends Component {
  render() {
    return (
      <>
        {/* Choice of Dragons or Rockets */}
        <Choice />
      </>
    );
  }
}

export default App;
