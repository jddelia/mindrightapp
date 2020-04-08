import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mindrightLogo = require('../../assets/mindrightMainLogo.svg');

function LoadAnimation() {
  return (
    <motion.div className="loadScreen">
      <motion.img 
        className="mainLogoAnimation" 
        key={mindrightLogo} 
        src={mindrightLogo} 
        initial={{ opacity: 0, scale: 1.6 }}
        animate={{ opacity: 1, scale: .6 }}
        exit={{ opacity: 0, scale: 1.6 }}
        transition={{ 
          opacity: { 
            duration: 1, 
            delay: 0 
          }, 
          scale: {
            duration: 1
          } 
        }}
      />
    </motion.div>
  );
}

export default LoadAnimation;