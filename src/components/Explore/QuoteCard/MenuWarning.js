import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function MenuWarning({ setMenuDisplay }) {
  useEffect(() => {
    const menuTimeout = setTimeout(() => {
      setMenuDisplay(false);
    }, 2000);

    return () => clearTimeout(menuTimeout);
  })

  return (
    <motion.div 
      className="settingsMenuWarning"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ 
        opactiy: { duration: 0 },
        x: { duration: 0, type: 'spring', stiffness: 650, damping: 10 }
      }}
    >
      <div className="menuSectionWarning">
        <span className="menuWarningTitleText">Select quote before adjusting settings.</span>
      </div>
    </motion.div>
  );
}

export default MenuWarning;