import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SettingsMenu from './SettingsMenu';

const balanceIcon = require('../../../assets/icons/balanceIcon.svg');
const eyeIcon = require('../../../assets/icons/eyeIconBrown.svg');
const mindsetIcon = require('../../../assets/icons/mindsetIcon.svg');
const lionIcon = require('../../../assets/icons/lionIcon.svg');
const purposeIcon = require('../../../assets/icons/purposeIcon.svg');

const icons = {
  "Courage": lionIcon,
  "Mindset": mindsetIcon,
  "Mind/Body": balanceIcon,
  "Purpose": purposeIcon,
  "Focus": eyeIcon
}

function QuoteCard({ author, content, source, theme }) {
  const [menuDisplayed, setMenuDisplay] = useState(false);

  function handleMenuClick() {
    setMenuDisplay(!menuDisplayed);
  }

  return (
    <motion.div className="quoteCard"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      whileHover={{ y: -10 }}
      transition={{ 
        opactiy: { duration: 0.8 },
        x: { duration: 0.2 },
        y: { duration: 0 }
      }}
    >
      <div className="quoteCardHeader">
        <div className="qcThemeIcon">
          <img className={`themeIcon ${theme}`} src={icons[theme]} alt="theme icon" />
        </div>

        <div className="qcThemeText">
          <span className="themeText">{theme}</span>
        </div>

        <div className="qcMenuBtn">
          <AnimatePresence>
            {menuDisplayed ? <SettingsMenu /> : null}
          </AnimatePresence>
          <img 
            className="menuBtn" 
            src={require('../../../assets/icons/menuIcon.svg')} 
            alt="menu button" 
            onClick={handleMenuClick}
          />
        </div>
      </div>

      <div className="quoteCardBody">
        <div className="qcMainContent">
          <p className="mainContent">
            {content}
          </p>
        </div>

        <div className="qcAuthor">
          <span className="author">{author} <br/>
          <em>{source}</em></span>
        </div>
      </div>

      <div className="quoteCardFooter">
        <div className="qcSelectBtn">
          <img className="selectBtn" src={require('../../../assets/icons/addIcon.svg')} alt="add button" />
        </div>
      </div>
    </motion.div>
  );
}

export default QuoteCard;