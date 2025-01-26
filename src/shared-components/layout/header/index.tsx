import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

import styles from './style.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.headerTitleList}>
        <li className={styles.headerTitleItem}>
          <a href="#">بیمه ها</a>
        </li>
        <li className={styles.headerTitleItem}>
          <a href="#">خسارت آنلاین</a>
        </li>
        <li className={styles.headerTitleItem}>
          <a href="#">ازکی کلاب</a>
        </li>
        <li className={styles.headerTitleItem}>
          <a href="#">دریافت اعتبار</a>
        </li>
        <li className={styles.headerTitleItem}>
          <a href="#">شرکت های بیمه</a>
        </li>
      </ul>
      <div className={styles.headerThemeIcon}>
        <FontAwesomeIcon icon={faHeadset} />
      </div>
    </header>
  );
}

export default Header;
