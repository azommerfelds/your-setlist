import React from "react";
import styles from "./Setlist.module.css";
import Track from "../Track/Track";

function Setlist({ setlist, action }) {
  return (
    <div className={styles.header}>
      <h2>{setlist.name}</h2>
      <div>
        {setlist.tracks.length === 0 ? (
          <p>Your setlist is empty. Search for a song and add it.</p>
        ) : (
          setlist.tracks.map((song) => (
            <div className={styles.track}>
              <Track key={song.id} song={song} />
              <button onClick={() => action(song)}>➖</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Setlist;
