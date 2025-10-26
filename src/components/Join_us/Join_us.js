'use client';

import styles from './Join_us.module.css';
import Button_More from '../Button_more/Button_more';
import JoinKnotDecor from '@/components/JoinKnotDecor/JoinKnotDecor';

export default function JoinUs() {
  const specialties = [
    'Юриспруденция',
    'Психология',
    'SMM',
    'Создание reels',
    'Программирование',
    'И т.д.'
  ];

  return (
    <section className={styles.joinUs}>
     
      <div className="container">
        <h2 className={styles.title}>Присоединяйтесь к нашему проекту</h2>
        <div className={styles.content}>
          <p className={styles.introText}>
            Ищем специалисток и специалистов в сферах:
          </p>
          
          <div className={styles.rightColumn}>
            <div className={styles.tagsContainer}>
              {specialties.map((specialty, index) => (
                <div key={index} className={styles.tag}>
                  {specialty}
                </div>
              ))}
              {/* Принудительный перенос строки после 3-го тега для соответствия макету */}
              <span className={styles.break} aria-hidden="true"></span>
            </div>
            <Button_More />
          </div>
        </div>
    </div>
    <JoinKnotDecor />
    </section>
  );
}

