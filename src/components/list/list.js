import React from 'react'
import './list.css';
import logo from './Bitcoin.svg.png';

function Coininfo(){
  return(
    <div className='coin'>
        <div className='coin-logo'><img src={logo} /></div>
        <div className='coin-inf'>
            <div className='coin-name coin-in'>
              BTC<span> &nbsp;/ USD</span>
            </div>
            <div className='coin-condition coin-in' style={{color:"red"}}>
            <i class="fa-sharp fa-solid fa-triangle"></i> <span style={{color:"red"}}>0.48%</span>
            </div>
        </div>
        <div className='coin-price '>
          19,918 USD
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
function Coin(){
  return(
    <div className='coin-list'>
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
      <Coininfo />
    </div>
  );
}
export default function List() {
  return (
    <section className='sidebar'>
      <Head />
      <Search />
      <Coin />
    </section>
  );
}
