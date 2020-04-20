import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';

import QuotesContext from '../../../context/QuotesContext';

function SettingsMenu({ cardID }) {
  const { savedIDs, setSavedIDs } = useContext(QuotesContext);
  const { notificationFrequency } = savedIDs[cardID];
  const [frequency, setFrequency] = useState( notificationFrequency || 2);
  const rangeRef = useRef();

  useEffect(() => {
    const updatedSavedID = savedIDs[cardID];
    updatedSavedID.notificationFrequency = frequency;
    setSavedIDs((prevIDs) => ({ ...prevIDs, ...updatedSavedID }));
  }, [frequency])

  function handleRangechange() {
    const rangeVal = rangeRef.current.value;
    setFrequency(rangeVal);
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
              Notification Frequency: <span className="frequencyNumber">{frequency}</span> 
            </label>
            <input 
              ref={rangeRef} 
              id="frequencyRangeInput" 
              type="range" 
              value={frequency}
              min="1" 
              max="12" 
              step="1"
              onChange={handleRangechange}
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default SettingsMenu;