import React from 'react';
import styles from './NavBars.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuLeft}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Maggie</a></li>
      </ul>
      <div className={styles.logo}>
        <span>MAGDALENA RADONICH</span>
      </div>
      <ul className={styles.menuRight}>
        <li><a href="/gallery">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
