import React from "react";

import styles from "./style.module.scss";

import logo from '../../../../assets/icons/logo.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} />
      </div>
      <div className={styles.headerTitle}>
        <h1>سامانه مقایسه و خرید آنلاین بیمه</h1>
      </div>
    </header>
  );
};

export default Header;
