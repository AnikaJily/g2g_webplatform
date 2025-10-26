'use client';

import { useState, useEffect } from 'react';
import styles from './Cart.module.css';

export default function Cart({ isOpen, onClose }) {
  const [cart, setCart] = useState([]);

  // Получаем корзину из localStorage
  const updateCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  };

  // Загружаем корзину при открытии
  useEffect(() => {
    if (isOpen) {
      updateCart();
    }
  }, [isOpen]);

  const removeFromCart = (productId) => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = savedCart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCart();
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Извлекаем число из строки цены (например, "1500 ₽" -> 1500)
      const priceValue = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      return total + priceValue;
    }, 0);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.cartOverlay} onClick={onClose}>
      <div className={styles.cartModal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        
        <h2 className={styles.cartTitle}>Корзина</h2>
        
        {cart.length === 0 ? (
          <p className={styles.emptyCart}>Корзина пуста</p>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <p className={styles.itemPrice}>{item.price}</p>
                  </div>
                  <button 
                    className={styles.removeButton}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>
            
            <div className={styles.cartFooter}>
              <p className={styles.total}>
                Итого: <span className={styles.totalPrice}>{calculateTotal()} ₽</span>
              </p>
              <button className={styles.checkoutButton}>
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

