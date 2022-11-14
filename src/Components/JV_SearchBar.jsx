import React from "react";

const JV_SearchBar = () => {
  return (
    <div id="searchBar">
      <input
        type="text"
        id="input-search"
        placeholder="find job that you need..."
      />
      <button id="btn-search" name="search" value="search">
        Find
      </button>
    </div>
  );
};

export default JV_SearchBar;
