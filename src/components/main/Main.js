import React, { useEffect, useState } from "react";
import { fetchcoinsdatacomplete, singlecoin } from "../../api";
import Graph from "../graph/Chart";
import Data from "./Data";
import "./Main.css";
import Statistics from "./Statistics";
const Main = ({ signal, coinId, coinData }) => {
  console.log("MAIN", signal);
  const [data, setData] = useState([]);
  const [coinD, setCoinD] = useState();
  const fetchData = async () => {
    const cdata = await fetchcoinsdatacomplete();
    setData(cdata);
  };
  useEffect(() => {
    console.log("SIGNAL CHANGED ON LIST", signal, coinId);
    if (coinId.length !== 0) {
    }
  }, [signal]);
  return signal === 0 ? (
    <div id="main"> Click on Crpyto tab to get more info</div>
  ) : (
    <div id="main">
      <Data coinId={coinId} signal={signal} />
      <Graph />
      <Statistics />
    </div>
  );
};

export default Main;
