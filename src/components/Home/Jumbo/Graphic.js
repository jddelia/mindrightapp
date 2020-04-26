import React from 'react';

import QuoteCardProto from '../../QuoteCardProto/QuoteCardProto';

function Graphic() {
  return (
    <div className="graphic">
      <QuoteCardProto position="first" />
      <QuoteCardProto position="second" />
      <QuoteCardProto position="third" />
    </div>
  );
}

export default Graphic;