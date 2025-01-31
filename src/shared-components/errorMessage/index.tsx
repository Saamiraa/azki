import React from 'react';

import styles from './style.module.scss';
interface ErrorMessageProps {
  message: string
  onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className={styles.errorMessage}>
      <p className={styles.errorMessageText}>{message}</p>
      <div className={styles.errorMessageButtonContainer}>
        <button className={styles.errorMessageButton} onClick={onRetry}>
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;