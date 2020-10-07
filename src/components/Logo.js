import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      height="42"
      width="42"
      {...props}
      
    />
  );
};

export default Logo;
