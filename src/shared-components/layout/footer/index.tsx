import styles from './style.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>دسترسی سریع</h3>
        <p className={styles.footerItem}>پنل فروشندگان</p>
        <p className={styles.footerItem}>شرایط و قوانین</p>
        <p className={styles.footerItem}>فرصت های شغلی</p>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>بیمه ها</h3>
        <p className={styles.footerItem}>بیمه شخص ثالث</p>
        <p className={styles.footerItem}>بیمه بدنه</p>
        <p className={styles.footerItem}>بیمه موتور سیلکت</p>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>خدمات مشتریان</h3>
        <p className={styles.footerItem}>ازکی کلاب</p>
        <p className={styles.footerItem}>بیمه اقساطی خودرو</p>
        <p className={styles.footerItem}>خسارت آنلاین</p>
      </div>
    </footer>
  );
}

export default Footer;