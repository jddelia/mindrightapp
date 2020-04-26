import React from 'react';

import QuoteAdded from './QuoteAdded';
import QuoteRemoved from './QuoteRemoved';

function CustomToast({ appearance, children, onDismiss }) {
  let toast = appearance === 'success' ? (
    <QuoteAdded content={children} dismiss={onDismiss} />
  ) : ( <QuoteRemoved content={children} dismiss={onDismiss} /> );

  return (
    <div>
      {toast}
    </div>
  );
}

export default CustomToast;