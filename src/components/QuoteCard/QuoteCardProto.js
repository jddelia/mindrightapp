import React from 'react';

const balanceIcon = require('../../assets/icons/balanceIcon.svg');
const eyeIcon = require('../../assets/icons/eyeIconBrown.svg');
const mindsetIcon = require('../../assets/icons/mindsetIcon.svg')

const protoContent = {
  first: {
    themeIcon: eyeIcon,
    theme: "FOCUS",
    content: "Sow a thought and you reap an action; sow an act and you reap a habit; sow a habit and you reap a character; sow a character and you reap a destiny.",
    author: "- Ralph Waldo Emerson",
    book: null 
  },
  second: {
    themeIcon: mindsetIcon,
    theme: "MINDSET",
    content: "First say to yourself what you would be;\nand then do what you have to do.",
    author: "- Epictetus",
    book: null
  },
  third: {
    themeIcon: balanceIcon,
    theme: "BALANCE",
    content: "The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.",
    author: "- Marcus Aurelius, ",
    book: "Meditations" 
  },
}

function QuoteCardProto({ position }) {
  return (
    <div className="quoteCardProto">
      <div className="quoteCardHeader">
        <div className="qcThemeIcon">
          <img className="themeIcon" src={protoContent[position].themeIcon} />
        </div>

        <div className="qcThemeText">
          <span className="themeText">{protoContent[position].theme}</span>
        </div>

        <div className="qcMenuBtn">
          <img className="menuBtn" src={require('../../assets/icons/menuIcon.svg')} />
        </div>
      </div>

      <div className="quoteCardBody">
        <div className="qcMainContent">
          <p className="mainContent">
            {protoContent[position].content}
          </p>
        </div>

        <div className="qcAuthor">
          <span className="author">{protoContent[position].author}<em>{protoContent[position].book}</em></span>
        </div>
      </div>

      <div className="quoteCardFooter">
        <div className="qcSelectBtn">
          <img className="selectBtn" src={require('../../assets/icons/addIcon.svg')} />
        </div>
      </div>
    </div>
  );
}

export default QuoteCardProto;