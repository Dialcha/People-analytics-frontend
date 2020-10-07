import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      {...props}
      width="42px" height="30px"
    />
  );
};

export default Logo;
