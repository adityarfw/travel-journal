import React from 'react';
// import globe from '../../public/';

const Navbar = () => {
  const globeImg = process.env.PUBLIC_URL + '/images/globe.png';
  return (
    <nav>
      <img src={globeImg} className='nav-img' />
      <p>my travel journal.</p>
    </nav>
  );
};

export default Navbar;
