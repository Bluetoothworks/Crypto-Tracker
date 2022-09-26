import React from "react";
import "./list.css";
function handleClick(signal, setSignal, key, setCoinId) {
  console.log("clicked", key);
  if (signal == 0) {
    setSignal(1);
  } else if (signal == 1) {
    setSignal(2);
  } else {
    setSignal(1);
  }
  setCoinId(key);
}
function Coininfo({ data, idx, signal, setSignal, setCoinId }) {
  const icon=data.change_24h<0?"fa-sharp fa-solid fa-triangle fa-rotate-180":"fa-sharp fa-solid fa-triangle"
  let col=data.change_24h<0?"red":"green";
  return (
    <div
      key={idx}
      className="coin"
      onClick={() => handleClick(signal, setSignal, data.id, setCoinId)}
    >
      <div className="coin-logo">
        <img src={data.image} alt="coin image" />
      </div>
      <div className="coin-inf">
        <div className="coin-name coin-in">
          {data.symbol.toUpperCase()}
          <span> &nbsp;/ USD</span>
        </div>
        <div className="coin-condition coin-in" >
          <i className={icon} style={{ color: col }}></i>{" "}
          <span style={{ color: col }}>{data.change_24h}%</span>
        </div>
      </div>
      <div className="coin-price ">{data.price} USD</div>
    </div>
  );
}
function Head() {
  return <div className="list-head">USD</div>;
}
function Search() {
  return (
    <div className="search">
      <input type="search" placeholder="Search for crypto currency"></input>
      <a href="#">
        <i className="fas fa-search"></i>
      </a>
    </div>
  );
}
function Coin({ coindata, signal, setSignal, setCoinId }) {
  return (
    <div className="coin-list">
      {coindata.map((data, idx) => (
        <Coininfo
          data={data}
          key={idx}
          signal={signal}
          setSignal={setSignal}
          setCoinId={setCoinId}
        />
      ))}
    </div>
  );
}
export default function List({ coindata, signal, setSignal, setCoinId }) {
  if (coindata.length == 0) return;
  // console.log(coindata);
  return (
    <section className="sidebar">
      <Head />
      <Search />
      <Coin
        coindata={coindata}
        signal={signal}
        setSignal={setSignal}
        setCoinId={setCoinId}
      />
    </section>
  );
}
