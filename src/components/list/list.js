import React,{useState} from "react";
import "./list.css";
function handleClick(signal, setSignal, key, setCoinId,coinInfo,setcoinInfo) {
  if (signal === 0) {
    setSignal(1);
  } else if (signal === 1) {
    setSignal(2);
  } else {
    setSignal(1);
  }
  setCoinId(key);
  setcoinInfo({...coinInfo,id:key});
}



export default function List({ coindata, signal, setSignal, setCoinId ,coinInfo,setcoinInfo}) {
  const [search, setSearch] = useState("");
  
  if (coindata.length === 0) return;

  const handleSearch = () => {
    return coindata.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
const icon=data.change_24h<0?"fa-sharp fa-solid fa-triangle fa-rotate-180":"fa-sharp fa-solid fa-triangle"
  let col=data.change_24h<0?"red":"green";
  return (
    <section className="sidebar">
      <div className="list-head">USD</div>;

      <div className="search">
        <input type="search" placeholder="Search for crypto currency" onChange={(e)=>setSearch(e.target.value)}></input>
        <a href="#">
          <i className="fas fa-search"></i>
        </a>
      </div>

      <div className="coin-list">
        {handleSearch().map((data, idx) => (
          <div
            key={idx}
            className="coin"
            onClick={() => handleClick(signal, setSignal, data.id, setCoinId,coinInfo,setcoinInfo)}
          >
            <div className="coin-logo">
              <img src={data.image} alt="coin image" />
            </div>
            <div className="coin-inf">
              <div className="coin-name coin-in">
                {data.symbol.toUpperCase()}
                <span> &nbsp;/ USD</span>
              </div>
              <div className="coin-condition coin-in" style={{ color: col }}>
                <i className={icon}></i>{" "}
                <span style={{ color: col }}>{data.change_24h}%</span>
              </div>
            </div>
            <div className="coin-price ">{data.price} USD</div>
          </div>
        ))}
      </div>
    </section>
  );
}
