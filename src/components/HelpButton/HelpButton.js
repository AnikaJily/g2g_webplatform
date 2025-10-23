import styles from './HelpButton.module.css';

export default function HelpButton({ onClick }) {
  return (
    <button 
      className={styles.helpButton}
      onClick={onClick}
      type="button"
    >
      <span className={styles.helpText}>
        Мне нужна помощь
      </span>
    </button>
  );
}
