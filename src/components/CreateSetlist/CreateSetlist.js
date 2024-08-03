import React from "react";
import styles from "./CreateSetlist.module.css";

function CreateSetlist() {
  return (
    <div>
      <form>
        <label htmlFor="create-setlist">➕</label>
        <input
          //onChange={(e) => props.setSearch(e.target.value)}
          className={styles.searchBar}
          id="create-setlist"
          type="text"
          placeholder="Setlist name"
        ></input>
      </form>
    </div>
  );
}

export default CreateSetlist;
