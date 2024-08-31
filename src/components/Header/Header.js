import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg"; // Assuming the SVG file is named 'logo.svg' and located in the same directory

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1>YourSetlist</h1>
      </a>
    </header>
  );
}

export default Header;
