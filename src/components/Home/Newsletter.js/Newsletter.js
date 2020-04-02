import React from 'react';

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletterTitle">
        <span className="newsletterTitletext">
          Join The Newsletter
        </span>
      </div>

      <div className="newsletterSignup">
        <form className="newsletterForm">
          <input className="newsletterInput" placeholder="Email" />
          <button className="submitBtn" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;