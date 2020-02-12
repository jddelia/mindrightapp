import React from 'react';
import Jumbo from './Jumbo';

const backgroundStyle = {
  backgroundImage: `url(${require('../../assets/mindrightbg1.png')})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

function Home() {
  return (
    <div className="home" style={backgroundStyle}>
      <Jumbo />
    </div>
  );
}

export default Home;