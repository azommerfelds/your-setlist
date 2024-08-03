import React from "react";
import styles from "./Setlist.module.css";
import Track from "../Track/Track";

function setlist(props) {
  return (
    <div className={styles.header}>
      <h2>Setlist</h2>
      <div>
        {props.setlist.length === 0 ? (
          <p>Your setlist is empty. Click on a song to add it.</p>
        ) : (
          props.setlist.map((song) => (
            <Track song={song} action={props.action} />
          ))
        )}
      </div>
    </div>
  );
}

export default setlist;
