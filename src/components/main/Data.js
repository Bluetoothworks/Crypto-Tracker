import React, { useEffect } from "react";
import { useState } from "react";
import { fetchcoinsdatacomplete } from "../../api";

const Data = ({ coinId, signal }) => {
  const [data, setData] = useState();
  const [marketCap, setMarketCap] = useState(0);
  const [totalSup, setTotalSup] = useState("");
  const [cirSup, setCirCup] = useState("");
  const [curPrice, setCurPrice] = useState("");
  const [maxSup, setMaxSup] = useState("");
  const [fulDilV, setFulDilV] = useState("");
  const [rank, setRank] = useState();
  const [name, setName] = useState();
  const [mktChng, setMktChng] = useState();
  const [symbol, setSymbol] = useState();
  useEffect(() => {
    if (signal !== 0) {
      console.log("coinid", coinId);
      console.log("signal", signal);
      const fetchData = async () => {
        const d = await fetchcoinsdatacomplete();
        const d1 = d.filter((x) => x.id === coinId);
        setData(d1);
        console.log(d1);
        console.log(d1[0].market_cap);
        setMarketCap(d1[0].market_cap);
        setTotalSup(d1[0].total_supply);
        setFulDilV(d1[0].fully_diluted_valuation);
        setCurPrice(d1[0].current_price);
        setCirCup(d1[0].circulating_supply);
        setMaxSup(d1[0].max_supply);
        setRank(d1[0].market_cap_rank);
        setName(d1[0].name);
        setMktChng(d1[0].market_cap_change_percentage_24h);
        setSymbol(d1[0].symbol.toUpperCase());
      };
      fetchData();
    }
  }, [signal]);

  return (
    <div className="data" style={{ color: "white" }}>
      <div className="data1-rank">Rank {rank}</div>
      <div className="data1-head">
        {name} {symbol}
      </div>
      <div className="data1-price">Current Price {curPrice}</div>
      <div className="data1-con1">
        <div className="data1-con1-c">
          <div>Market Cap</div>
          <div className="data1-con1-c-data">
            {marketCap ? marketCap : "N/A"}
          </div>
        </div>
        <div className="data1-con1-c">
          <div>Market cap change %</div>
          <div className="data1-con1-c-data">{mktChng ? mktChng : "N/A"}</div>
        </div>
        <div className="data1-con1-c">
          <div>Fully diluted valuation</div>
          <div className="data1-con1-c-data">{fulDilV ? fulDilV : "N/A"}</div>
        </div>
        <div className="data1-con1-c">
          <div>Circulating Supply</div>
          <div className="data1-con1-c-data">{cirSup ? cirSup : "N/A"}</div>
        </div>
        <div className="data1-con1-c">
          <div>Total Supply</div>
          <div className="data1-con1-c-data">{totalSup ? totalSup : "N/A"}</div>
        </div>
        <div className="data1-con1-c">
          <div>Max Supply</div>
          <div className="data1-con1-c-data">{maxSup ? maxSup : "N/A"}</div>
        </div>
      </div>
    </div>
  );
};

export default Data;
