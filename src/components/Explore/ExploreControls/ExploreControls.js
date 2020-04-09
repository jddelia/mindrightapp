import React from 'react';

function ExploreControls() {
  return (
    <div className="exploreControls">
      <form className="exploreFilter">
        <input className="filter" placeholder="Search" />
        <button type="submit" className="filterSubmitBtn">Search</button>
      </form>
    </div>
  );
}

export default ExploreControls;