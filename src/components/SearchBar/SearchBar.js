import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <div>
      <form onSubmit={props.handleSearch}>
        <label htmlFor="search-bar">🔎</label>
        <input
          onChange={(e) => props.setSearch(e.target.value)}
          className={styles.searchBar}
          id="search-bar"
          type="text"
          placeholder="What do you want to play?"
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
