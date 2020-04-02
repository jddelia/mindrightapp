import React from 'react';

import Jumbo from './Jumbo/Jumbo';
import HowItWorks from './HowItWorks/HowItWorks';
import Featured from './Featured/Featured';

function Home() {
  return (
    <div className="home">
      <Jumbo />
      <HowItWorks />
      <Featured />
    </div>
  );
}

export default Home;