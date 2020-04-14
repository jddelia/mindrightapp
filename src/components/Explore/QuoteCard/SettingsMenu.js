import React from 'react';
import { motion } from 'framer-motion';

function SettingsMenu() {
  return (
    <motion.div 
      className="settingsMenu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        opactiy: { duration: 0 }
      }}
    >
    
    </motion.div>
  );
}

export default SettingsMenu;