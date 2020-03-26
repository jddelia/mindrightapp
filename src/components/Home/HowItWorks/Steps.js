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

        </div>
      </div>

      <div className="stepSection">
        <div className="stepSectionIcon">
          <img className="stepIcon" src={require('../../../assets/icons/selectIcon.svg')} />
        </div>
        
        <div className="stepSectionHeader" style={{display:"none"}}>

        </div>

        <div className="stepSectionContent">

        </div>
      </div>

      <div className="stepSection">
        <div className="stepSectionIcon">
          <img className="stepIcon" src={require('../../../assets/icons/refocusIcon.svg')} />
        </div>
        
        <div className="stepSectionHeader" style={{display:"none"}}>

        </div>

        <div className="stepSectionContent">

        </div>
      </div>
    </div>
  )
}

export default Steps;