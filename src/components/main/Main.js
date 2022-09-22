import Graph from "../graph/Chart";
import Data from "./Data";
import "./Main.css";
import Statistics from "./Statistics";
const Main = ({ signal, coinId }) => {
  return signal === 0 ? (
    <div id="main" style={{ fontSize: "2rem", color: "whitesmoke" }}>
      {" "}
      Click on any Crypto coin to get more info...
    </div>
  ) : (
    <div id="main">
      <Data coinId={coinId} signal={signal} />
      <Graph />
      <Statistics coinId={coinId} signal={signal} />
    </div>
  );
};

export default Main;
