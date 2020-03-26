import React from 'react';
import Jumbo from './Jumbo/Jumbo';
import HowItWorks from './HowItWorks/HowItWorks';

function Home() {
  return (
    <div className="home">
      <Jumbo />
      <HowItWorks />
    </div>
  );
}

export default Home;