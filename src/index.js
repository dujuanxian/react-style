import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const headerStyle = {
  color: "blue",
  backgroundColor: "yellow"
};

function App() {
  return (
    <div className="App">
      <h1 style={headerStyle}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
