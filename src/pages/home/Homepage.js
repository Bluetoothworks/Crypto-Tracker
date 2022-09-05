import React,{useState,useEffect} from 'react'
import { fetchcoinsdata,historicalChart } from '../../api';
import List from '../../components/list/list';

export default function HomePage() {
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
    <div>
      <List coindata={coinData}/>
    </div>
  )
}
