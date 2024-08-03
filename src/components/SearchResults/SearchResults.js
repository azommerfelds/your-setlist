import React from "react";
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";

function SearchResults(props) {
  return (
    <div>
      {props.results.length === 0 && props.search != "" ? (
        <p>Search for a song or an artist</p>
      ) : (
        props.results.map((song) => <Track song={song} action={props.action} />)
      )}
    </div>
  );
}

export default SearchResults;
