import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Loader from "../../components/loader/Loader";

const Search = ({ loadSearchData }) => {
  const [searchTerm, setSearchTerm] = useState(undefined);

  // Use state for loader
  const [getLoader, setGetLoader] = useState(true);

  //create an async method to fetch data
  useEffect(() => {
    setTimeout(() => {
      setGetLoader(false);
    }, 4000);
  });
  return getLoader ? (
    <Loader />
  ) : (
    <div id="search">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        name="search"
        id="searchbox"
        placeholder="What fo you want to watch?"
      />
      <button
        rel="noreferrer"
        id="search-icon"
        onClick={() => loadSearchData(searchTerm)}
      >
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
