'use client';

import Button from '../Button/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Проект girl2girl</h1>

        <p>
          <span className={styles.highlight}>Бесплатная</span> психологическая помощь женщинам, попавшим в ситуацию домашнего насилия
        </p>

        <div>
          <p>
            Не знаешь что делать? Совсем <span className={styles.highlight}>запуталась</span>?
          </p>
          <p>
            <span className={styles.highlight}>Свяжись</span> с нами
          </p>
        </div>

        <Button
          variant="primary"
          size="medium"
          onClick={() => console.log('Нужна помощь')}
        >
          Мне нужна помощь
        </Button>
      </div>
    </section>
  );
}
