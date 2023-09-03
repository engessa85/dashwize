import React from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className="search">
      <BsSearch className="icon" />
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default Search;
