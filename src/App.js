import React,{useState,useEffect} from "react";
import Navbar from "./components/navbar/navbar";
import { fetchcoinsdata } from './api';

function App() {
  const [coinData,setcoinData]=useState([]);
  useEffect(()=>{
    
    const fetchAPI= async ()=>{
      const data=await fetchcoinsdata();
      // console.log(data);
      setcoinData(data);
    }
    fetchAPI();
  },[]);
  return (
    <div id="home">
      <Navbar />
    </div>
  );
}


export default App;


