import React from 'react';
import { motion } from 'framer-motion';

function QuoteAdded({ content }) {
  return (
    <motion.div 
      className="quoteAddedToast"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ 
        opactiy: { duration: 0.5 },
        x: { duration: 0.2 },
      }}
    >
      <img className="toastIcon" src={require('../assets/icons/quoteAddedIcon.svg')} alt="checkmark" />
      <div className="toastContent">
        {content}
      </div>
    </motion.div>
  );
}

export default QuoteAdded;