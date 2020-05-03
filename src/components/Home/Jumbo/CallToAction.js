import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="callToAction">
      <Link to="/explore">
        <button className="ctaBtn">
          Explore
        </button>
      </Link>
    </div>
  );
}

export default CallToAction;