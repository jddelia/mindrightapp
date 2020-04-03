import React from 'react';

import Jumbo from './Jumbo/Jumbo';
import HowItWorks from './HowItWorks/HowItWorks';
import Featured from './Featured/Featured';
import NewsletterContainer from './Newsletter.js/NewsletterContainer';

function Home() {
  return (
    <div className="home">
      <Jumbo />
      <HowItWorks />
      <Featured />
      <NewsletterContainer />
    </div>
  );
}

export default Home;