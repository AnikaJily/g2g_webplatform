'use client';

import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  href,
  className = '',
  iconAfter,
  ...props 
}) {
  const variantClass = variant === 'primary' ? styles.buttonPrimary : 
                      variant === 'secondary' ? styles.buttonSecondary :
                      variant === 'info' ? styles.buttonInfo : styles.buttonPrimary;
  const sizeClass = size === 'small' ? styles.buttonSmall : 
                   size === 'large' ? styles.buttonLarge : styles.buttonMedium;
  
  const buttonClasses = [
    styles.button,
    variantClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  // Если передан href, рендерим как ссылку
  if (href) {
    return (
      <Link 
        href={href}
        className={buttonClasses}
        {...props}
      >
        <span className={styles.buttonText}>{children}</span>
        {iconAfter && <span className={styles.buttonIcon}>{iconAfter}</span>}
      </Link>
    );
  }

  // Иначе рендерим как кнопку
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      <span className={styles.buttonText}>{children}</span>
      {iconAfter && <span className={styles.buttonIcon}>{iconAfter}</span>}
    </button>
  );
}
