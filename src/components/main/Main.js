import React from "react";
import Graph from "../graph/Chart";
import Data from "./Data";
import "./Main.css";
import Statistics from "./Statistics";
const Main = () => {
  return (
    <div id="main">
      <Data />
      <Graph/>
      <Statistics />
    </div>
  );
};

export default Main;
