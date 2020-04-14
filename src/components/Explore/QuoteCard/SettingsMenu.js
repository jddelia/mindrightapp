import React from 'react';
import { motion } from 'framer-motion';

function SettingsMenu() {
  return (
    <motion.div 
      className="settingsMenu"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ 
        opactiy: { duration: 0 },
        x: { duration: 0, type: 'spring', stiffness: 180, damping: 15 }
      }}
    >
    
    </motion.div>
  );
}

export default SettingsMenu;