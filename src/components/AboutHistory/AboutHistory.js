import styles from './AboutHistory.module.css';

export default function AboutHistory() {
  return (
    <section className={styles.aboutHistory}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>История создания проекта</h2>
            
            <div className={styles.description}>
              <p>
                Наш проект родился из острой потребности — из реальных просьб о помощи, 
                которые женщины оставляли в боте телеграм-канала о домашнем насилии.
              </p>
              
              <p>
                Остро осознавая нехватку доступной поддержки в Москве, наша учредительница — 
                режиссерка короткометражного фильма о домашнем насилии, призерка всероссийской 
                олимпиады с исследованием о влиянии насилия на психику женщин, сценаристка и 
                актриса спектакля об абьюзе — решила создать{' '}
                <span className={styles.highlight}>пространство</span>, где каждая пострадавшая 
                сможет получить психологическую помощь бесплатно.
              </p>
              
              <p>
                Сегодня, когда многие центры поддержки закрылись или оказались под давлением, 
                мы объединили силы старших студенток-психологинь, чтобы предоставить женщинам 
                возможность быть услышанными и начать путь к восстановлению.
              </p>
              
              <p>
                Мы здесь, чтобы поддержать.{' '}
                <span className={styles.highlight}>Мы здесь, чтобы помочь.</span>
              </p>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <img 
              src="https://www.figma.com/api/mcp/asset/0fd10447-f801-40ab-8ad7-182489347de7"
              alt="Группа женщин поддержки"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

