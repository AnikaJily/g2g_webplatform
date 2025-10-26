'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import NavigationItem from './NavigationItem';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/volunteer', label: 'Волонтерство' },
    { href: '/merch', label: 'Наш Мерч' },
    { href: '/not-found', label: '404' },
  ];
  
  return (
    <>
      <div className={styles.pagesContainer}>
        <nav className={styles.navigation}>
          <NavigationItem 
            href="/" 
            isActive={pathname === '/'}
          >
            Главная
          </NavigationItem>
          
          <NavigationItem 
            href="/about" 
            isActive={pathname === '/about'}
          >
            О нас
          </NavigationItem>
          
          <NavigationItem 
            href="/volunteer" 
            isActive={pathname === '/volunteer'}
          >
            Волонтерство
          </NavigationItem>
        </nav>
        
        <button 
          type="button" 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonActive : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
        >
          <img src="/assets/icons/menu_button.svg" alt="" className={styles.menuIcon} />
        </button>

        {/* Выпадающее меню */}
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <nav className={styles.dropdownNav}>
              {menuItems.map((item) => (
                <div key={item.href} onClick={closeMenu}>
                  <NavigationItem 
                    href={item.href}
                    isActive={pathname === item.href}
                  >
                    {item.label}
                  </NavigationItem>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
