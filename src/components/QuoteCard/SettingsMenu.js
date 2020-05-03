import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';

import QuotesContext from '../../context/QuotesContext';

import { resetNotification } from '../../utils/notificationScheduler';

function SettingsMenu({ cardID, cardData, setMenuDisplay }) {
  const { savedIDs, setSavedIDs, timers, setTimers } = useContext(QuotesContext);

  // Temp fix for notificationFrequency bug when card unsaved
  // while settings menu open.
  let notificationFrequency = null;
  try {
    notificationFrequency = savedIDs[cardID].notificationFrequency;
  } catch (err) {
    console.log("Close settings before unsaving.");
  }

  const [frequency, setFrequency] = useState( notificationFrequency || 2);
  const menuRef = useRef();
  const rangeRef = useRef();
  const isInitialMount = useRef(true);

  useEffect(() => {
    menuRef.current.focus();
  }, []);

  useEffect(() => {
    savedIDs[cardID].notificationFrequency = frequency;
    setSavedIDs((prevIDs) => ({ ...prevIDs }));

    if (!isInitialMount.current) {
      const schedulerDeps = {
        quoteID: cardID,
        savedQuote: cardData,
        savedIDs: savedIDs,
        timerID: timers[cardID],
        timers: timers,
        setTimers: setTimers
      };
  
      resetNotification(schedulerDeps);
    }

    isInitialMount.current = false;
  }, [frequency]);

  function handleRangeChange() {
    const rangeVal = rangeRef.current.value;
    setFrequency(rangeVal);
  }

  function handleMenuBlur(e) {
    // If click not within settings menu, close it
    if (!(e.relatedTarget === menuRef.current || e.relatedTarget === rangeRef.current)) {
      setMenuDisplay(false);
    }
    return;
  }

  return (
    <motion.div 
      className="settingsMenu"
      tabIndex="0"
      ref={menuRef}
      onBlur={handleMenuBlur}
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
              Notification Frequency: <span className="frequencyNumber">{frequency}</span> (hrs) 
            </label>
            <input 
              ref={rangeRef} 
              id="frequencyRangeInput" 
              type="range" 
              value={frequency}
              min="1" 
              max="12" 
              step="1"
              onChange={handleRangeChange}
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default SettingsMenu;