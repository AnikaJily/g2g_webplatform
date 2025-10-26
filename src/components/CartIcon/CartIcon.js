'use client';

import { useState, useEffect } from 'react';
import styles from './CartIcon.module.css';

export default function CartIcon({ onOpenCart }) {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Загружаем количество товаров из localStorage
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setItemCount(cart.length);
    };

    // Обновляем счетчик при загрузке
    updateCartCount();

    // Слушаем изменения localStorage
    window.addEventListener('storage', updateCartCount);

    // Проверяем изменения каждую секунду (на случай, если изменения были в той же вкладке)
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <button 
      className={styles.cartIconButton}
      onClick={onOpenCart}
      aria-label="Корзина"
    >
      <div className={styles.iconCircle}>
        <img 
          src="/assets/icons/shop_cart.svg" 
          alt="Корзина"
          className={styles.cartIcon}
        />
      </div>
      
      {itemCount > 0 && (
        <div className={styles.badge}>
          <span className={styles.badgeText}>{itemCount}</span>
        </div>
      )}
    </button>
  );
}

