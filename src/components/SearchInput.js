import React from "react";
import PropTypes from "prop-types";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="fill-current mr-2 text-gray-600"
  >
    <path
      className="heroicon-ui"
      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
    />
  </svg>
);

const SearchInput = () => {
  return (
    <div className="bg-light py-3 px-2 flex rounded">
      <SearchIcon />
      <input
        type="text"
        className="appearance-none rounded bg-light text-gray-700 w-full focus:outline-none"
        placeholder="Search history"
      />
    </div>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
