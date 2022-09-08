import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { historicalChart } from '../../api';
// import { CryptoState } from '../App';
import { Line } from "react-chartjs-2";
import { chartDays } from './data';
import SelectButton from '../navbar/SelectButton';


// added below 3 lines to resolve error of category
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useStyleConfig } from '@chakra-ui/react';
Chart.register(CategoryScale);


const Graph= () => {
const [historicData, setHistoricData] = useState();
const [days, setDays] = useState(1);

// const { currency } = CryptoState();

// const fetchHistoricData = async() => {
//     const { data } = await axios.get(historicalChart("bitcoin", days, "usd"));
    
//     setHistoricData(data.prices);
// };


// useEffect(() => {
//     // fetchHistoricData();

// }, [days]);

useEffect(()=>{
    
    const fetchAPI= async ()=>{
      const data=await historicalChart();
      setHistoricData(data.prices);
      console.log(data.prices);
    }
    fetchAPI();
  },[]);

  const styles = useStyleConfig('container')

  return (
    historicData?(
    <div className='container'>
    {
        <>
            <Line 
                data={{
                    labels: historicData.map((coin) => {
                        let date = new Date(coin[0]);
                        let time = date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [{
                        data:historicData.map((coin)=>coin[1]),
                        label: "Price in USD for 30 days",  
                        borderColor: "#0000FF",
                },
                ],
                }}
            />
            <div className='buttons'>
                {chartDays.map(day => (
                    <SelectButton
                    key={day.value}
                    onClick={() => setDays(day.value)}
                    selected={day.value === days}
                    >
                        {day.label}
                    </SelectButton>
                ))}
            </div>
        </>
    }
    </div>):null
  )
}

export default Graph;