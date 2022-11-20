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

      {/* let searchQuery = document.getElementById("input-search");

function removeAllChild() {
  while (recomjobElement.lastChild) {
    recomjobElement.removeChild(recomjobElement.lastChild);
  }
}

searchQuery.addEventListener("change", (nilai) => {
  removeAllChild();
  searchJob(nilai.target.value);
});

async function searchJob(keyword) {
  let resp = await fetch(jobs_endPoint.replace("searchQuery", keyword));
  let jobSearch = await resp.json();
  // console.log(jobSearch);

  jobSearch.forEach((data) => {
    createJobCard(data);
  }); */}
    </div>
  );
};

export default JV_SearchBar;
