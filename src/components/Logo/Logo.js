import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img 
        src="/assets/icons/logo.svg" 
        alt="Girl2Girl логотип" 
        className={styles.logoImage}
      />
    </div>
  );
}