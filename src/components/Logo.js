import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      height="48"
      {...props}
    />
  );
};

export default Logo;
