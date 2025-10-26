'use client';

import ButtonMore from '@/components/Button_more/Button_more';
import styles from './page.module.css';
import Footer from '../../components/Footer/Footer';


// Вставь в <script> перед </body> или в модуль
function setVh() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setVh();
window.addEventListener('resize', setVh);

export default function NotFound() {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.notFoundPage}>
        <div className={styles.background}>
          <img 
            src="/assets/images/background_404.svg" 
            alt="" 
            className={styles.backgroundImage}
          />
        </div>
        
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.messageBox}>
              <p className={styles.message}>
                Запуталась? Кажется, этой страницы не существует!
              </p>
            </div>
            
            <ButtonMore href="/">
              На главную
            </ButtonMore>
          </div>
        </div>
      </div>
    </div>
      <Footer /> 
      </>
    );
}


