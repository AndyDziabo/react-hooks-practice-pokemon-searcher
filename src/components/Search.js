import React from "react";

function Search({ onSearch }) {

  const handleSearch = (e) => {
    onSearch(e.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onInput={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
