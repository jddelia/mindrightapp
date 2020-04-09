import React from 'react';

const balanceIcon = require('../../assets/icons/balanceIcon.svg');
const eyeIcon = require('../../assets/icons/eyeIconBrown.svg');
const mindsetIcon = require('../../assets/icons/mindsetIcon.svg');
const lionIcon = require('../../assets/icons/lionIcon.svg');
const purposeIcon = require('../../assets/icons/purposeIcon.svg');

const icons = {
  "Courage": lionIcon,
  "Mindset": mindsetIcon,
  "Mind/Body": balanceIcon,
  "Purpose": purposeIcon,
  "Focus": eyeIcon
}

function QuoteCard({ author, content, source, theme }) {
  return (
    <div className="quoteCard">
      <div className="quoteCardHeader">
        <div className="qcThemeIcon">
          <img className={`themeIcon ${theme}`} src={icons[theme]} alt="theme icon" />
        </div>

        <div className="qcThemeText">
          <span className="themeText">{theme}</span>
        </div>

        <div className="qcMenuBtn">
          <img className="menuBtn" src={require('../../assets/icons/menuIcon.svg')} alt="menu button" />
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
          <img className="selectBtn" src={require('../../assets/icons/addIcon.svg')} alt="add button" />
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;