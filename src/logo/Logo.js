import React from 'react';
import tesla from '../teslaImage/tesla.svg';

const Logo = () => {
  return (
    <div className='logo-cnt'>
      <img className='tesla-logo' src={tesla} alt='logo' />
    </div>
  );
};

export default Logo;
