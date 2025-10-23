'use client';

import Link from 'next/link';
import styles from './Button_more.module.css';

export default function ButtonMore({ href, onClick, children = 'Подробнее' }) {
  const content = (
    <>
      <span className={styles.text}>{children}</span>
      <img 
        src="/assets/icons/arrow.svg" 
        alt="" 
        className={styles.arrow}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {content}
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {content}
    </button>
  );
}
