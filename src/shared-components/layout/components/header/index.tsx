import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

import logo from '../../../../assets/icons/logo.svg'
import UserInfo from "../userInfo";
import { useLocation } from "react-router-dom";

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
          {location.pathname === "/" ? <h2>ثبت نام</h2> : <UserInfo />}
        </div>
      )}
    </header>
  );
};

export default Header;

