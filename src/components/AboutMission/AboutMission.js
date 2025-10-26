import styles from './AboutMission.module.css';

export default function AboutMission() {
  return (
    <section className={styles.aboutMission}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Наша миссия</h2>
          
          <div className={styles.missionBox}>
            <div className={styles.backgroundImage}>
              <img 
                src="https://www.figma.com/api/mcp/asset/4a43dd76-ce3b-4f86-82fb-940933d597f8"
                alt=""
                className={styles.decorImage}
              />
            </div>
            
            <div className={styles.textContent}>
              <p>
                Мы верим, что каждая женщина заслуживает права на поддержку, безопасность и восстановление.
              </p>
              
              <p>
                Наша миссия — сделать психологическую помощь доступной для пострадавших от домашнего насилия женщин, дать им пространство для исцеления и вернуть веру в себя и в жизнь без страха.
              </p>
              
              <p>
                Мы стремимся не только поддерживать женщин на пути к восстановлению, но и освещать проблему насилия, разрушать молчание вокруг неё и вдохновлять на перемены.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

