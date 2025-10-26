'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './NavigationItem.module.css';

export default function NavigationItem({ href, children, isActive = false }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Определяем какие иконки использовать в зависимости от раздела
  const isBigStroke = children === 'Волонтерство';
  const stillSvg = isBigStroke ? "/assets/icons/stroke/big_still.svg" : "/assets/icons/stroke/still.svg";
  const loopSvg = isBigStroke ? "/assets/icons/stroke/big_loop.svg" : "/assets/icons/stroke/loop.svg";
  
  return (
    <div 
      className={styles.navItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href} className={styles.navLink}>
        {children}
      </Link>
      <div className={`${styles.underlineContainer} ${isBigStroke ? styles.bigUnderline : ''}`}>
        <img 
          src={stillSvg}
          alt="" 
          className={`${styles.underlineImage} ${isBigStroke ? styles.bigUnderlineImage : ''} ${styles.stillImage} ${isHovered || isActive ? styles.hidden : ''}`}
        />
        <img 
          src={loopSvg}
          alt="" 
          className={`${styles.underlineImage} ${isBigStroke ? styles.bigUnderlineImage : ''} ${styles.loopImage} ${isHovered || isActive ? styles.visible : ''}`}
        />
      </div>
    </div>
  );
}
