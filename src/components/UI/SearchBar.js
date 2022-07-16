import React from "react";

const SearchBar = () => {
  return (
    <label className="relative block w-4/5 text-pry-200">
      <input
        type="text"
        className="border border-purple py-3 px-6 rounded-2xl placeholder:text-pry-200  w-full shadow-sm focus:outline-none focus:border-pry-200 focus:ring-pry-200 focus:ring-1 sm:text-sm"
        placeholder="Search here"
      />
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 right-0 flex items-center pr-4">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </label>
  );
};

export default SearchBar;
