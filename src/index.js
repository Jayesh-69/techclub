import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar/navbar";
import Main from "./Components/main";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
