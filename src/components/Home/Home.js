import React from 'react';

import Jumbo from './Jumbo/Jumbo';
import HowItWorks from './HowItWorks/HowItWorks';
import Featured from './Featured/Featured';
import Newsletter from './Newsletter.js/Newsletter';

function Home() {
  return (
    <div className="home">
      <Jumbo />
      <HowItWorks />
      <Featured />
      <Newsletter />
    </div>
  );
}

export default Home;