import styles from './MainWomanDecor.module.css';

export default function MainWomanDecor() {
  return (
    <div className={styles.imageWrapper} aria-hidden="true">
      <img
        src="/assets/images/hero.png"
        alt=""
        className={styles.heroImage}
      />
    </div>
  );
}
