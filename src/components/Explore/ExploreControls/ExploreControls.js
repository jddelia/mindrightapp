import React, { useEffect, useRef } from "react";

let exploreControls = null;
let controlsPosition = {};

function stickyControls() {
  if (!exploreControls) {
    exploreControls = document.getElementById("exploreControls");
    controlsPosition.y = window.getComputedStyle(exploreControls).top;
  }

  exploreControls.classList.toggle(
    "stickyControls",
    window.scrollY > parseInt(controlsPosition.y) - 5
  );
}

function ExploreControls({ handleFilter, handleSelectAll }) {
  const inputRef = useRef();
  const checkboxRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", stickyControls);
    return () => {
      document.removeEventListener('scroll', stickyControls);
      exploreControls = null;
      controlsPosition = {};
    }
  }, []);

  function handleSubmitSearch(e) {
    e.preventDefault();
    const searchTerm = inputRef.current.value;

    handleFilter(searchTerm);
  }

  function handleCheck(e) {
    handleSelectAll(e.target.checked);
  }

  return (
    <div id="exploreControls">
      <form className="exploreFilter" onSubmit={handleSubmitSearch}>
        <input ref={inputRef} className="filter" placeholder="Search cards" />
        <button type="submit" className="filterSubmitBtn">
          Search
        </button>
      </form>

      <div className="selectAll">
        <input
          ref={checkboxRef}
          type="checkbox"
          className="toggleSelectAll"
          onClick={handleCheck}
        />
        <label className="selectAllLabel">Show All</label>
      </div>
    </div>
  );
}

export default ExploreControls;
