import React from 'react';

import Header from './Header';

function About() {
  return (
    <div className="about">
      <Header />
      
      <div className="aboutContent">
        <p className="aboutText">
          MINDRIGHT is at its core, an app to enahnce focus.
          The user selects from a series of "quote cards",
          which all contain motivational content. Then the user
          selects a card(s) which they find motivating and focus
          themselves on behaving in the spirit of their selected
          card(s). Timed notifications also allow the user to refocus
          on the card(s).
        </p>
      </div>
    </div>
  );
}

export default About;