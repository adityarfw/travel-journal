import React from 'react';
import globe from '../images/globe.png';

const Navbar = () => {
  return (
    <nav>
      <img src={globe} className='nav-img' />
      <p>my travel journal.</p>
    </nav>
  );
};

export default Navbar;
