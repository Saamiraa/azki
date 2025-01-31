import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import UserInfo from "../userInfo";

import logo from '../../../../assets/icons/logo.svg'

import styles from "./style.module.scss";

const Header: React.FC = () => {

  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} />
      </div>
      <div className={styles.headerTitle}>
        <h1>سامانه مقایسه و خرید آنلاین بیمه</h1>
      </div>
      {isMobile && (
        <div className={styles.userInfoContainer}>
          {location.pathname === "/" ? <h2 className={styles.title}>ثبت نام</h2> : <UserInfo />}
        </div>
      )}
    </header>
  );
};

export default Header;