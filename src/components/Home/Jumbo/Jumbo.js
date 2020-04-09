import React from 'react';

import Phrase from './Phrase';
import Graphic from './Graphic';
import CallToAction from './CallToAction';

/*const backgroundStyle = {
  backgroundImage: `url(${require('../../../assets/mindrightbg1.png')})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};*/

function Jumbo() {
  return (
    <div className="jumbo">
      <Phrase />
      <Graphic />
      <div className="lotusIconJumbo">
        <img className="lotusIcon" src={require('../../../assets/mainLotus.svg')} alt="lotus" />
      </div>
      <CallToAction />
    </div>
  );
}

export default Jumbo;