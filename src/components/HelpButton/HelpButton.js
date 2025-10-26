import styles from './HelpButton.module.css';

export default function HelpButton({ onClick, size = 'small' }) {
  const buttonClass = size === 'large' 
    ? `${styles.helpButton} ${styles.large}` 
    : styles.helpButton;

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      type="button"
    >
      <span className={styles.helpText}>
        Мне нужна помощь
      </span>
    </button>
  );
}
