import Link from 'next/link';
import { useState } from 'react';
import styles from './NavigationItem.module.css';

const stillSvg = "/assets/icons/stroke/still.svg";
const loopSvg = "/assets/icons/stroke/loop.svg";

export default function NavigationItem({ href, children, isActive = false }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={styles.navItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href} className={styles.navLink}>
        {children}
      </Link>
      <div className={styles.underlineContainer}>
        <div className={styles.underline}>
          <img 
            //src={stillSvg}
            alt="" 
            className={`${styles.underlineImage} ${styles.stillImage} ${isHovered ? styles.hidden : ''}`}
          />
          <img 
            //src={loopSvg}
            alt="" 
            className={`${styles.underlineImage} ${styles.loopImage} ${isHovered ? styles.visible : ''}`}
          />
        </div>
      </div>
    </div>
  );
}
