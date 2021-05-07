import React from 'react';

const Search = () => {
  return (
    <div className="search-box">
      <div class="input-group">
        <input
          type="search"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export { Search };
