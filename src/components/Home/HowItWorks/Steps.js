import React from 'react';

function Steps() {
  return (
    <div className="steps">
      <div className="stepSection">
        <div className="stepSectionIcon">
          <img className="stepIcon" src={require('../../../assets/icons/searchIcon.svg')} />
        </div>
        
        <div className="stepSectionHeader" style={{display:"none"}}>
          
        </div>

        <div className="stepSectionContent">
          <p className="stepContentText">
            <span className="stepAccent">Search</span> <br/> 
            Search for a quote. <br/>
            Filter your search by theme, and content, until you find
            one which you'd like to make the theme for your day. 
          </p>
        </div>
      </div>

      <div className="stepSection">
        <div className="stepSectionIcon">
          <img className="stepIcon" src={require('../../../assets/icons/selectIcon.svg')} />
        </div>
        
        <div className="stepSectionHeader" style={{display:"none"}}>

        </div>

        <div className="stepSectionContent">
        <p className="stepContentText">
            <span className="stepAccent">Select</span> <br/>
            Select a quote. <br/>
            Once you find a quote, save it and select frequency,
            so you can use it
            for motivation. 
          </p>
        </div>
      </div>

      <div className="stepSection">
        <div className="stepSectionIcon">
          <img className="stepIcon" src={require('../../../assets/icons/refocusIcon.svg')} />
        </div>
        
        <div className="stepSectionHeader" style={{display:"none"}}>

        </div>

        <div className="stepSectionContent">
          <p className="stepContentText">
            <span className="stepAccent">Refocus</span> <br/>
            Refocus your mind. <br/>
            Use the selected quote, to refocus your mind throughout
            the day. Set specific intervals, to recieve reminders, so
            you won't lose focus. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Steps;