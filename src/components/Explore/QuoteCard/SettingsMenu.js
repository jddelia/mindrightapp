import React, { useRef, useContext } from 'react';
import { motion } from 'framer-motion';

import QuotesContext from '../../../context/QuotesContext';

function SettingsMenu() {
  const { frequency, setFrequency } = useContext(QuotesContext);
  const rangeRef = useRef();

  function handleRangechange() {
    const rangeVal = rangeRef.current.value;
    console.log(rangeVal)
  }

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
      <div className="menuSection">
        <div className="menuTitle">
          <span className="menuTitleText">Settings</span>
        </div>
        <div className="frequency">
          <form className="frequencyForm">
            <label className="frequencyLabel">
              Quote Frequency: <span className="frequencyText">{frequency}</span> 
            </label>
            <input 
              ref={rangeRef} 
              id="frequencyRangeInput" 
              type="range" 
              min="0" 
              max="12" 
              onChange={handleRangechange}
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default SettingsMenu;