import React from 'react';
import './App.css';
import ReactRouterDOM from 'react-router-dom';
function Navbar(){
  return(
    <section>
      <label className='logo'>Crypto Tracker</label>
      <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Feedback</a></li>
        </ul>
    </section>
  );
}
  export default Navbar;