import React from 'react';

import QuoteAdded from './QuoteAdded';
import QuoteRemoved from './QuoteRemoved';

function CustomToast({ appearance, children }) {
  let toast = appearance === 'success' ? (
    <QuoteAdded content={children} />
  ) : ( <QuoteRemoved content={children} /> );

  return (
    <div>
      {toast}
    </div>
  );
}

export default CustomToast;