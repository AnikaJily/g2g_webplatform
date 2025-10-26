import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const projectLinks = [
    { label: 'Проект', href: '/', isHighlight: true },
    { label: 'Получить помощь', href: '/' },
    { label: 'Волонтерство в проекте', href: '/volunteer' },
    { label: 'О нас', href: '/about' },
    { label: 'Наш Мерч', href: '/merch' },
    { label: '404', href: '/not-found' },
  ];

  const socialLinks = [
    { label: 'Наши соцсети', isHighlight: true },
    { label: 'Instagram', href: '' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.ownContainer}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.linksSection}>
              <nav className={styles.linkColumn}>
                {projectLinks.map((link, index) => (
                  link.href ? (
                    <Link 
                      key={index} 
                      href={link.href} 
                      className={`${styles.link} ${link.isHighlight ? styles.highlight : ''}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span key={index} className={`${styles.link} ${link.isHighlight ? styles.highlight : ''}`}>
                      {link.label}
                    </span>
                  )
                ))}
              </nav>

              <nav className={styles.linkColumn}>
                {socialLinks.map((link, index) => (
                  link.href ? (
                    <a 
                      key={index} 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.link} ${link.isHighlight ? styles.highlight : ''}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span key={index} className={`${styles.link} ${link.isHighlight ? styles.highlight : ''}`}>
                      {link.label}
                    </span>
                  )
                ))}
              </nav>
            </div>

            <div className={styles.logoSection}>
              <img 
                src="/assets/icons/logo.svg" 
                alt="girl2girl" 
                className={styles.logo}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

