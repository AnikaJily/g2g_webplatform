import styles from './VolunteerBenefits.module.css';
import Button from '../Button/Button';

export default function VolunteerBenefits() {
  return (
    <section className={styles.volunteerBenefits}>
      <h2 className={styles.title}>Почему тебе стоит поучаствовать?</h2>
      
      <div className={styles.benefitsList}>
        <p className={styles.benefit}>
          <span className={styles.dash}>— </span>
          <span className={styles.highlight}>Рекомендательные письма</span>
          <span> после 3 месяцев волонтерства</span>
        </p>
        
        <p className={styles.benefit}>
          <span className={styles.dash}>— </span>
          <span>Уникальная активность для твоего </span>
          <span className={styles.highlight}>портфолио</span>
        </p>
        
        <p className={styles.benefit}>
          <span className={styles.dash}>— </span>
          <span className={styles.highlight}>Опыт и общение </span>
          <span>с такими же крутыми ребятами</span>
        </p>
        
        <p className={styles.benefit}>
          <span className={styles.dash}>— </span>
          <span>Возможность</span>
          <span className={styles.highlight}> изменить чью-то жизнь</span>
        </p>
      </div>
      
      <Button variant="primary" size="medium">
        Заполнить заявку
      </Button>
    </section>
  );
}

