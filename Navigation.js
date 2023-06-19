//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav className="App-nav">
        <Link to="/">Home</Link>

        <Link to="../topics">Topics</Link>
        
        <Link to="../gallery">Gallery</Link>
        <Link to="../staff">Staff List</Link>
        <Link to="/log">Assessment Log</Link>
        <Link to="../order">Order Now!</Link>
    </nav>
  );
}

export default Navigation;
