import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <h1 className={styles.header}>
      <a href="/">YourSetlist</a>
    </h1>
  );
}

export default Header;
