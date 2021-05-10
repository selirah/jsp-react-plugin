import React from 'react';

const Search = () => {
  return (
    <div className="search-box">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export { Search };
