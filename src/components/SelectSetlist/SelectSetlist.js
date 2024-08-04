import React from "react";
import styles from "./SelectSetlist.module.css";

function SelectSetlist({ setlists, setSelectedSetlistId, removeSetlist }) {
  return (
    <div>
      <h2>Your setlists</h2>
      {setlists.map((setlist) => (
        <div className={styles.setlist}>
          <p key={setlist.id} onClick={() => setSelectedSetlistId(setlist.id)}>
            {setlist.name}
          </p>
          <button onClick={() => removeSetlist(setlist.id)}>➖</button>
        </div>
      ))}
    </div>
  );
}

export default SelectSetlist;
