import styles from './MerchProducts.module.css';

export default function MerchProducts() {
  const products = [
    {
      id: 1,
      name: 'Эко-сумка girl2girl',
      description: 'Стильная сумка с логотипом проекта. Идеальна для повседневного использования.',
      price: '1500 ₽',
      image: '/assets/images/girl_bag.jpg',
    },
    {
      id: 2,
      name: 'Кепка синяя',
      description: 'Creative department - для тех, кто создает свой мир.',
      price: '1200 ₽',
      image: '/assets/images/merch_slider_2.jpg',
    },
    {
      id: 3,
      name: 'Кепка фиолетовая',
      description: 'С яркими значками и посланиями поддержки.',
      price: '1200 ₽',
      image: '/assets/images/merch_slider_3.jpg',
    },
    {
      id: 4,
      name: 'Брелоки girl2girl',
      description: 'Набор ярких брелоков с уникальным дизайном.',
      price: '500 ₽',
      image: '/assets/images/merch_slider_4.jpg',
    },
    {
      id: 5,
      name: 'Футболка "Light"',
      description: 'Even in the dark there is light. Послание надежды.',
      price: '1800 ₽',
      image: '/assets/images/merch_slider_5.jpg',
    },
  ];

  return (
    <section className={styles.productsSection}>
      <div className="container">
        <h2 className={styles.title}>Наши товары</h2>
        <p className={styles.subtitle}>
          Покупая мерч, вы поддерживаете проект и помогаете женщинам получить{' '}
          <span className={styles.highlight}>бесплатную</span> психологическую помощь
        </p>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{product.price}</span>
                  <button className={styles.buyButton}>
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

