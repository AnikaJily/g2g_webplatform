import styles from './Urgent_help.module.css';

export default function UrgentHelp() {
  const helplines = [
    { number: '112', href: 'tel:112', description: 'Единый номер экстренной помощи' },
    { number: '8 (499) 216-50-50', href: 'tel:+74992165050', description: 'Горячая линия экстренной психологической помощи МЧС' },
    { number: '8-800-7000-600', href: 'tel:+78007000600', description: 'Tелефон доверия для женщин, подвергшихся домашнему насилию' },
    { number: '8 800 100-49-94', href: 'tel:+78001004994', description: 'Единый телефон доверия психологической помощи для взрослых и детей (круглосуточно)' }
  ];

  return (
    <section className={styles.urgentHelp} aria-labelledby="urgent-help-title">
      <div className={styles.owncontainer}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <h2 id="urgent-help-title" className={styles.title}>Экстренная помощь</h2>

            <p className={styles.description}>
              Если вам угрожает опасность — обратитесь по данным номерам:
            </p>

            <ul className={styles.helplinesList} aria-label="Телефоны экстренной помощи">
              {helplines.map((h, i) => (
                <li key={i} className={styles.helplineCard}>
                  <a className={styles.number} href={h.href}>{h.number}</a>
                  <p className={styles.cardDescription}>{h.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
