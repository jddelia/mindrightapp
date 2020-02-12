import React from 'react';

import Phrase from './Phrase';
import Graphic from './Graphic';
import CallToAction from './CallToAction';

function Jumbo() {
  return (
    <div className="jumbo">
      <Phrase />
      <Graphic />
      <div className="lotusIconJumbo">
        <img className="lotusIcon" src={require('../../assets/mainLotus.svg')} />
      </div>
      <CallToAction />
    </div>
  );
}

export default Jumbo;