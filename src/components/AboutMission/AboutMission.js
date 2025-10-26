import styles from './AboutMission.module.css';

export default function AboutMission() {
  return (
    <section className={styles.aboutMission}>
      <div className="container">
        <h2 className={styles.title}>Наша миссия</h2>
        
        <div className={styles.missionBox}>
          <div className={styles.backgroundImage}>
            <img 
              src="https://www.figma.com/api/mcp/asset/18550cef-ce79-4955-8a99-8b7e4e26ae90"
              alt=""
              className={styles.decorImage}
            />
          </div>
          
          <div className={styles.textContent}>
            <p>
              Мы верим, что каждая женщина заслуживает права на поддержку, 
              безопасность и восстановление.
            </p>
            
            <p>
              Наша миссия — сделать психологическую помощь доступной для пострадавших 
              от домашнего насилия женщин, дать им пространство для исцеления и вернуть 
              веру в себя и в жизнь без страха.
            </p>
            
            <p>
              Мы стремимся не только поддерживать женщин на пути к восстановлению, 
              но и освещать проблему насилия, разрушать молчание вокруг неё и 
              вдохновлять на перемены.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

