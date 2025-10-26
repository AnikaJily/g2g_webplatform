import styles from './MerchMarquee.module.css';

export default function MerchMarquee() {
  // Чередуем два текста для разнообразия
  const texts = [
    'Поддержите наш проект, покупая мерч!',
    'Все средства идут на развитие проекта'
  ];
  
  // Создаем массив с чередующимися текстами
  const marqueeText = Array(12).fill(null).map((_, index) => texts[index % 2]);

  return (
    <div className={styles.marqueeSection}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {marqueeText.map((text, index) => (
            <span key={index} className={styles.marqueeItem}>
              {text}
            </span>
          ))}
        </div>
        {/* Дублируем для бесшовной анимации */}
        <div className={styles.marqueeContent} aria-hidden="true">
          {marqueeText.map((text, index) => (
            <span key={`duplicate-${index}`} className={styles.marqueeItem}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

