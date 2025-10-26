import styles from './DomesticViolenceSection.module.css';
import Button from '../Button/Button';

export default function DomesticViolenceSection() {
  return (
    <div className="container">
    <section className={styles.domesticViolenceSection}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Что такое домашнее насилие?</h2>
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                Это жестокое обращение в домашних условиях, например, между супругами или родителями и детьми
              </p>
              <p className={styles.descriptionText}>
                Домашнее насилие бывает разным. Это не всегда синяки и травмы. Оно может заключаться в словах, запретах, контроле или угрозах. Но у всего этого есть общая черта — <span className={styles.highlight}>нарушение границ и прав человека.</span>
              </p>
            </div>
            
            <div className={styles.helpBlock}>
              <div className={styles.speechBubbleWrapper}>
                <div className={styles.speechBubble}>
                  <p className={styles.bubbleText}>
                    Узнаёшь себя в этой ситуации? Мы готовы помочь тебе <span className={styles.underline}>безопасно</span> и <span className={styles.underline}>анонимно</span>
                  </p>
                </div>
                <img 
                  src="/assets/icons/tail.svg"
                  alt=""
                  className={styles.speechBubbleTail}
                />
              </div>
              
              <div className={styles.bottomRow}>
                <div className={styles.iconContainer}>
                  <img 
                    src="/assets/icons/Icon.svg" 
                    alt="g2g icon" 
                    width="66" 
                    height="58"
                  />
                </div>
                
                <div className={styles.buttonContainer}>
                  <Button variant="primary" size="medium">
                    Получить помощь
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.houseImage}></div>
          </div>
        </div>
      
    </section>
    </div>
  );
}
