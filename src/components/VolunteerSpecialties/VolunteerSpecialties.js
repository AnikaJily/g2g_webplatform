import styles from './VolunteerSpecialties.module.css';

export default function VolunteerSpecialties() {
  const specialties = [
    'Юриспруденция',
    'Психология',
    'SMM',
    'Создание reels',
    'Программирование'
  ];

  return (
    <section className={styles.volunteerSpecialties}>
      <h2 className={styles.title}>
        Ищем специалисток и специалистов в <span className={styles.highlight}>сферах</span>:
      </h2>
      
      <div className={styles.badgesContainer}>
        {specialties.map((specialty, index) => (
          <div key={index} className={styles.badge}>
            {specialty}
          </div>
        ))}
      </div>
      
      <p className={styles.description}>
        И просто заряженных ребят, готовых менять мир!
      </p>
    </section>
  );
}

