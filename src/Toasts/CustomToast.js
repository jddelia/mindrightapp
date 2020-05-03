import React from 'react';

import QuoteAdded from './QuoteAdded';
import QuoteRemoved from './QuoteRemoved';

function CustomToast({ appearance, children, onDismiss }) {
  let toast;

  switch (appearance) {
    case "success":
      toast = <QuoteAdded content={children} dismiss={onDismiss} />;
      break;
    case "warning":
      toast = <QuoteRemoved content={children} dismiss={onDismiss} />;
      break;
    default:
      toast = null;
  }

  return (
    <div>
      {toast}
    </div>
  );
}

export default CustomToast;