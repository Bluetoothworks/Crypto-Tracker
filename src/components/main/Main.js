import Graph from "../graph/Chart";
import Data from "./Data";
import "./Main.css";
import Statistics from "./Statistics";
import Hamburger from "./Hamburger";
const Main = ({ signal, coinId ,coinInfo}) => {
  return signal === 0 ? (
    <div id="main" style={{ fontSize: "2rem", color: "whitesmoke" }}>
      {" "}
      Click on any Crypto coin to get more info...
    </div>
  ) : (
    <div id="main">
      <Data coinId={coinId} signal={signal} />
      <Graph coinInfo={coinInfo}/>
      <Statistics coinId={coinId} signal={signal} />
      <Hamburger />
    </div>
  );
};

export default Main;
