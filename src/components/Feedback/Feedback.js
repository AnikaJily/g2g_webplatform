'use client';

import { useState } from 'react';
import styles from './Feedback.module.css';

export default function Feedback() {
  const [formData, setFormData] = useState({
    contact: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.feedback}>
      <div className="container">
        <h2 className={styles.title}>Обратная связь</h2>
        
        <div className={styles.content}>
          {/* Левая часть: Форма */}
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="contact" className={styles.label}>
                  Ваша почта или ник в Telegram
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="@girl2girl"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Ваше сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Сообщение"
                  className={styles.textarea}
                  rows={5}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Отправить
              </button>
            </form>
          </div>

          {/* Правая часть: Диалоговые блоки */}
          <div className={styles.infoContainer}>
            <div className={styles.messagesBlock}>
              <div className={styles.messageBox}>
                <p className={styles.messageText}>У вас появились вопросы?</p>
              </div>

              <div className={styles.messageBox}>
                <p className={styles.messageText}>
                  Хотите предложить улучшения или поделиться впечатлениями о проекте?
                </p>
              </div>

              <div className={styles.messageBoxWithTail}>
                <p className={styles.messageText}>
                  Напишите нам — мы читаем каждое сообщение и очень ценим обратную связь
                </p>
                <img 
                  src="/assets/icons/tail.svg"
                  alt=""
                  className={styles.messageTail}
                />
              </div>
            </div>

            <div className={styles.logoContainer}>
              <img 
                src="/assets/icons/icon_smile.svg"
                alt="g2g"
                className={styles.logo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

