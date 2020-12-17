import React from 'react';
import logo from '../assets/logo.png';
const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src={logo}
      height="42"
      width="70"
      {...props}
      
    />
  );
};
export default Logo;
