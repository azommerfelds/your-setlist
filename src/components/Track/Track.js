import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  return (
    <div className={styles.track}>
      <p>
        "{props.song.title}" by {props.song.artist}
      </p>
    </div>
  );
}

export default Track;
