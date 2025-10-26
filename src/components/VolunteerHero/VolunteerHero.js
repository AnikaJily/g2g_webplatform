import styles from './VolunteerHero.module.css';
import Button from '../Button/Button';

export default function VolunteerHero() {
  return (
    <section className={styles.volunteerHero}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Волонтерство в проекте</h2>
          
          <div className={styles.description}>
            <p>
              В нашем проекте волонтерство — это не только помощь другим, но и часть тёплого сообщества.
            </p>
            
            <p>
              Здесь мы поддерживаем друг друга, делимся опытом, вместе растём и создаём новые идеи. Если тебе откликаются наши ценности —{' '}
              <span className={styles.highlight}>присоединяйся</span>!
            </p>
            
            <p>&nbsp;</p>
            
            <p>Вместе мы можем сделать больше!</p>
          </div>
          
          <div className={styles.buttonWrapper}>
            <Button variant="primary" size="medium">
              Присоединиться
            </Button>
          </div>
        </div>
        
        <div className={styles.iconContainer}>
          <img 
            src="/assets/icons/volunteer.svg" 
            alt="Волонтерство"
            className={styles.icon}
          />
        </div>
      </div>
    </section>
  );
}

