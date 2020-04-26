import React from 'react';
import { motion } from 'framer-motion';

function QuoteRemoved({ content, dismiss }) {
  return (
    <motion.div 
      className="quoteRemovedToast"
      onClick={dismiss}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ 
        opactiy: { duration: 0.8 },
        x: { duration: 0.2 },
      }}
    >
      <img className="toastIcon" src={require('../assets/icons/quoteRemovedIcon.svg')} alt="trash can" />
      <div className="toastContent">
        {content}
      </div>
    </motion.div>
  );
}

export default QuoteRemoved;