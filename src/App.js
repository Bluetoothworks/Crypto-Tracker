import React,{useState,useEffect} from "react";
import Navbar from "./components/navbar/navbar";

import { fetchcoinsdata,historicalChart } from './api';
import List from "./components/list/list";
import './styles.css';



function App() {
  const [coinData,setcoinData]=useState([]);
  useEffect(()=>{
    
    const fetchAPI= async ()=>{
      const data=await fetchcoinsdata();
      // console.log(data);
      setcoinData(data);
    }
    fetchAPI();

    historicalChart();
  },[]);
  return (
    <div id="home">
      <Navbar />
      <List />
    </div>
  );
}


export default App;


