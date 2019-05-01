import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ParentComponent } from "./ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
