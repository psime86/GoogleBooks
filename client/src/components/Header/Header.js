import React from 'react';
import './style.css';

function Header() {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container text-center'>
        <h1 className='display-3 font-weight-bold'>Google Books Search</h1>
        <p className='lead'>Search and Save Your Favorite Books</p>
      </div>
    </div>
  );
}

export default Header;