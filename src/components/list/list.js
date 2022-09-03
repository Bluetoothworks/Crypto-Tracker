import React from 'react'
import './list.css';
import logo from './Bitcoin.svg.png';

function Coininfo({data}){
  return(
    <div className='coin'>
        <div className='coin-logo'><img src={data.image} alt="coin image"/></div>
        <div className='coin-inf'>
            <div className='coin-name coin-in'>
              {data.symbol.toUpperCase()}<span> &nbsp;/ USD</span>
            </div>
            <div className='coin-condition coin-in' style={{color:"red"}}>
            <i class="fa-sharp fa-solid fa-triangle"></i> <span style={{color:"red"}}>{data.change_24h}%</span>
            </div>
        </div>
        <div className='coin-price '>
          {data.price} USD
        </div>
      </div>
  );
}
function Head() {
  return (
    <div className='list-head'>
      USD
    </div>
  );
}
function Search() {
  return (
    <div className='search'>
      <input type='search' placeholder='Search for crypto currency'></input>
      <a href='#'><i class="fas fa-search"></i></a>
    </div>
  );
}
function Coin({coindata}){
  return(
    <div className='coin-list'>
      {coindata.map((data)=>(<Coininfo data={data}/>))}
    </div>
  );
}
export default function List({coindata}){
  console.log(coindata);
  if(!coindata)
    return;
  return (
    <section className='sidebar'>
      <Head />
      <Search />
      <Coin coindata={coindata}/>
    </section>
  );
}
