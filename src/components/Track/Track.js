import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  return (
    <div className={styles.track}>
      <p onClick={() => props.action(props.song)}>
        "{props.song.title}" by {props.song.artist}
      </p>
    </div>
  );
}

export default Track;
