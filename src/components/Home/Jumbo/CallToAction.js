import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="callToAction">
      <button className="ctaBtn"><Link to="/explore">Explore</Link></button>
    </div>
  );
}

export default CallToAction;