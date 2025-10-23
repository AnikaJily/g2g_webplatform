import { usePathname } from 'next/navigation';
import NavigationItem from './NavigationItem';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
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
        <button type="button" className={styles.menuButton} aria-label="Открыть меню">
        <img src="/assets/icons/menu_button.svg" alt="" className={styles.menuIcon} />
        </button>
    </div>
  );
}
