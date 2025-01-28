import styles from './style.module.scss'

interface ContentWrapperProps {
  title?: string;
  children?: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ title, children }) => {
  return (
    <div className={styles.contentWrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.contentArea}>
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
