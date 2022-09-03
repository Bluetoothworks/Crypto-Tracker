import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import List from "./components/list/list";
import "./styles.css";
import { fetchcoinsdata } from "./api";
import Main from "./components/main/Main";

function App() {
  const [coinData, setcoinData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchcoinsdata();
      // console.log(data);
      setcoinData(data);
    };
    fetchAPI();
  }, []);
  return (
    <div id="home">
      <Navbar />
      <List />
      <Main />
    </div>
  );
}

export default App;
