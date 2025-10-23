import styles from './JoinKnotDecor.module.css';

export default function JoinKnotDecor() {
  return (
    <div className={styles.knotWrapper} aria-hidden="true">
      <img
        src="/assets/icons/join_knot.svg"
        alt=""
        className={styles.knotImage}
      />
    </div>
  );
}


