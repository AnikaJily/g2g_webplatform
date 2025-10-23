import styles from './RulesSection.module.css';
import Button_more from '../Button_more/Button_more';

export default function RulesSection() {
  return (
    <section className={styles.rulesSection}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Левая колонка: Как мы работаем */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>Как мы работаем?</h2>
            
            <img 
              src="/assets/icons/hand_pen.svg" 
              alt="Рука с ручкой"
              className={styles.icon}
            />
            
            <ol className={styles.list}>
              <li>Ты заполняешь анкету</li>
              <li>Мы отвечаем в ближайшее время и организовываем онлайн-встречу с психологиней</li>
            </ol>
          </div>

          {/* Правая колонка: Наши правила */}
          <div className={styles.rightColumn}>
            <h2 className={styles.title}>Наши правила</h2>
            
            <div className={styles.badge}>
              <span className={styles.plus}>+</span>18
            </div>
            
            <p className={styles.description}>
              Также <span className={styles.highlight}>не работаем </span>
              с алкогольной и наркотической зависимостями, психическими расстройствами, но подскажем другие проекты, которые помогут
            </p>
          </div>
        </div>

        <Button_more />
      </div>
    </section>
  );
}
