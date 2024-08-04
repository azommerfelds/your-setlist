import React, { useState } from "react";
import styles from "./CreateSetlist.module.css";

function CreateSetlist({ addSetlist }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addSetlist(name);
      setName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="create-setlist">➕</label>
        <input
          className={styles.searchBar}
          id="create-setlist"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New setlist name"
        />
      </form>
    </div>
  );
}

export default CreateSetlist;
