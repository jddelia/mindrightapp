import React, { useRef } from "react";

function ExploreControls({ handleSelectAll }) {
  const inputRef = useRef();
  const checkboxRef = useRef();

  function handleCheck(e) {
    handleSelectAll(e.target.checked);
  }

  return (
    <div className="exploreControls">
      <form className="exploreFilter">
        <input className="filter" placeholder="Search" />
        <button type="submit" className="filterSubmitBtn">
          Search
        </button>
      </form>

      <div className="selectAll">
        <label className="selectAllLabel">Show All</label>
        <input
          ref={checkboxRef}
          type="checkbox"
          className="toggleSelectAll"
          onClick={handleCheck}
        />
      </div>
    </div>
  );
}

export default ExploreControls;
