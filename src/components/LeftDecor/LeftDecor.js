import styles from './LeftDecor.module.css';

export default function LeftDecor() {
  return (
    <div className={styles.decorWrapper} aria-hidden="true">
      <img
        src="/assets/icons/side_knot.svg"
        alt=""
        className={styles.vectorIcon}
      />
    </div>
  );
}


