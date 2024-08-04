import React from "react";
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";

function SearchResults(props) {
  return (
    <div>
      {props.results.length === 0 && props.search != "" ? (
        <p>Search for a song or an artist</p>
      ) : (
        props.results.map((song) => (
          <div className={styles.track}>
            <Track song={song} action={props.action} />
            <button onClick={() => props.action(song)}>➕</button>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;
