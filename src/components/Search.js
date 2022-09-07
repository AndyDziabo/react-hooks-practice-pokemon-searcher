import React from "react";

function Search({ onQuery }) {
  function handleInput(e) {
    onQuery(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input" onInput={handleInput}>
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
