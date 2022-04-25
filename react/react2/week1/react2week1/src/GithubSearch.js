import React, { useState, createContext } from "react";
import { FetchData } from "./FetchData";
export const SearchContext = createContext();
export function GithubSearch() {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  //   const user = useContext();
  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <SearchContext.Provider value={searchInput}>
        <FetchData />
      </SearchContext.Provider>
    </div>
  );
}
