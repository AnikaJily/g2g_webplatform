'use client';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import HelpButton from '../HelpButton/HelpButton';
import styles from './Header.module.css';

export default function Header() {
  const handleHelpClick = () => {
    console.log('Запрос помощи');
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Logo />
        <Navigation />
        <HelpButton onClick={handleHelpClick} />
      </div>
    </header>

  );
}
