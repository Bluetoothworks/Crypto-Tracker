import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchcoinsdatacomplete } from "../../api";

const Statistics = ({ coinId, signal }) => {
  const [curPrice, setCurPrice] = useState("");
  const [low24, setLow24] = useState();
  const [high24, setHigh24] = useState();
  const [priceChange, setPriceChange] = useState();
  const [priceChangePer, setPriceChangePer] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [totalVolume, setTotalVolume] = useState();
  const [marketCap, setMarketCap] = useState();
  const [marketCapChng, setMarketCapChng] = useState();
  const [marketCapChper, setMarketCapChper] = useState();
  const [rank, setRank] = useState();
  useEffect(() => {
    if (signal !== 0) {
      console.log("coinid", coinId);
      console.log("signal", signal);
      const fetchData = async () => {
        const d = await fetchcoinsdatacomplete();
        const d1 = d.filter((x) => x.id === coinId);
        setCurPrice(d1[0].current_price);
        setLow24(d1[0].low_24h);
        setHigh24(d1[0].high_24h);
        setPriceChange(d1[0].price_change_24h);
        setPriceChangePer(d1[0].price_change_percentage_24h);
        setTotalSupply(d1[0].total_supply);
        setTotalVolume(d1[0].total_volume);
        setMarketCap(d1[0].market_cap);
        setMarketCapChng(d1[0].market_cap_change_24h);
        setMarketCapChper(d1[0].market_cap_change_percentage_24h);
        setRank(d1[0].market_cap_rank);
      };
      fetchData();
    }
  }, [signal]);

  return (
    <div id="stats">
      <div className="st-con">
        <div className="st-head">BTC PRICE STATISTICS</div>
        <div className="st-con2">
          <div className="st-con2-c">
            <div>Bitcoin Price</div>
            <div>{curPrice}</div>
          </div>
          <div className="st-con2-c">
            <div>24h High</div>
            <div>{high24}</div>
          </div>
          <div className="st-con2-c">
            <div>24h Low</div>
            <div>{low24}</div>
          </div>
          <div className="st-con2-c">
            <div>Price Change</div>
            <div>{priceChange}</div>
          </div>
          <div className="st-con2-c">
            <div>Price Change %</div>
            <div>{priceChangePer}</div>
          </div>
          <div className="st-con2-c">
            <div>Total Volume</div>
            <div>{totalVolume}</div>
          </div>
          <div className="st-con2-c">
            <div>Market Cap</div>
            <div>{marketCap}</div>
          </div>
          <div className="st-con2-c">
            <div>Market Cap Rank</div>
            <div>{rank}</div>
          </div>
          <div className="st-con2-c">
            <div>Markte Cap Change 24h</div>
            <div>{marketCapChng}</div>
          </div>
          <div className="st-con2-c">
            <div>Market Cap Change %</div>
            <div>{marketCapChper}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
