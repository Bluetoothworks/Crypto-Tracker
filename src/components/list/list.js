import React from 'react'
import './list.css';
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
      <form className='search-container'>
        <input type='text' id='search-bar' placeholder='What can I help you with today?' />
          <a href='#'><img className='search-icon' src='http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png' /></a>
      </form>
    </div>
  );
}
export default function List() {
  return (
    <section className='sidebar'>
      <Head />
      <Search />
    </section>
  );
}
