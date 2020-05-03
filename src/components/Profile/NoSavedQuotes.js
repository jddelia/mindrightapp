import React from 'react';
import { Link } from 'react-router-dom';

function NoSavedQuotes() {
  return (
    <div className="noSavedQuotes">
      <span className="noneSaved">
        No Quotes Saved.
      </span>

      <Link to="/explore">
        <button className="exploreBtn">
          Explore
        </button>
      </Link>
    </div>
  );
}

export default NoSavedQuotes;