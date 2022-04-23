import React, { useState } from "react";

const Search = ({ posts }) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = posts.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(posts);
    }
  };

  return (
    <>
      <div className="header">
        <h1 className="mb-3">Internship</h1>
        <input
          type="search"
          name=""
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <div className="grid">
        {searchInput.length > 1
          ? filteredResults.map((post) => (
              <div key={post.id} className="all">
                <h2>{post.id}</h2>
                <h6>Title</h6>
                <p>{post.title}</p>
                <h6>Body</h6>
                <p>{post.body}</p>
              </div>
            ))
          : []}
      </div>
    </>
  );
};

export default Search;
