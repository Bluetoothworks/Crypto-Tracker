import React, { useState, useEffect } from "react";
import { fetchcoinsdata, historicalChart } from "../../api";
import List from "../../components/list/list";
import Graph from "../../components/graph/Chart";
import { Flex, Spacer } from "@chakra-ui/react";
import Main from "../../components/main/Main";

export default function HomePage() {
  const [coinData, setcoinData] = useState([]);
  const [signal, setSignal] = useState(0);
  const [coinId, setCoinId] = useState("");
  const [coinInfo,setcoinInfo]=useState({id:"",days:30,currency:"usd"});
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchcoinsdata();
      setcoinData(data);
    };
    fetchAPI();

    historicalChart();
  }, []);

  return (
    <div>
      <List
        coindata={coinData}
        signal={signal}
        setSignal={setSignal}
        setCoinId={setCoinId}
        coinInfo={coinInfo}
        setcoinInfo={setcoinInfo}
      />
      {/* <Graph/> */}
      <Main signal={signal} coinId={coinId} coinData={coinData} coinInfo={coinInfo} />
    </div>
  );
}
