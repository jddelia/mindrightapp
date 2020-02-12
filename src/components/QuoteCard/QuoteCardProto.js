import React from 'react';

function QuoteCardProto() {
  return (
    <div className="quoteCardProto">
      <div className="quoteCardHeader">
        <div className="qcThemeIcon">
          <img className="themeIcon" src={require('../../assets/icons/balanceIcon.svg')} />
        </div>

        <div className="qcThemeText">
          <span className="themeText">BALANCE</span>
        </div>

        <div className="qcMenuBtn">
          <img className="menuBtn" src={require('../../assets/icons/menuIcon.svg')} />
        </div>
      </div>

      <div className="quoteCardBody">
        <div className="qcMainContent">
          <p className="mainContent">
            The happiness of your life depends upon 
            the quality of your thoughts: therefore, 
            guard accordingly, and take care that you 
            entertain no notions unsuitable to virtue 
            and reasonable nature.
          </p>
        </div>

        <div className="qcAuthor">
          <span className="author">- Marcus Aurelius, <em>Meditations</em></span>
        </div>
      </div>

      <div className="quoteCardFooter">
        <div className="qcSelectBtn">
          <button className="selectBtn">select</button>
        </div>
      </div>
    </div>
  );
}

export default QuoteCardProto;