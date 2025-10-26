'use client';

import { useState } from 'react';
import styles from './MerchSlider.module.css';

export default function MerchSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Массив изображений для слайдера
  const slides = [
    { id: 1, src: '/assets/images/girl_bag.jpg', alt: 'Girl2Girl сумка' },
    { id: 2, src: '/assets/images/merch_slider_2.jpg', alt: 'Girl2Girl кепка синяя' },
    { id: 3, src: '/assets/images/merch_slider_3.jpg', alt: 'Girl2Girl кепка фиолетовая' },
    { id: 4, src: '/assets/images/merch_slider_4.jpg', alt: 'Girl2Girl брелоки' },
    { id: 5, src: '/assets/images/merch_slider_5.jpg', alt: 'Girl2Girl футболка' },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getPrevIndex = () => {
    return currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  };

  const getNextIndex = () => {
    return currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        <div className={styles.slidesWrapper}>
          {/* Левый preview слайд */}
          <div className={styles.slidePreview}>
            <div className={styles.slideImageWrapper}>
              <img
                src={slides[getPrevIndex()].src}
                alt={slides[getPrevIndex()].alt}
                className={styles.slideImage}
              />
            </div>
          </div>

          {/* Активный слайд */}
          <div className={styles.slideActive}>
            <div className={styles.slideImageWrapper}>
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                className={styles.slideImage}
              />
            </div>
          </div>

          {/* Правый preview слайд */}
          <div className={styles.slidePreview}>
            <div className={styles.slideImageWrapper}>
              <img
                src={slides[getNextIndex()].src}
                alt={slides[getNextIndex()].alt}
                className={styles.slideImage}
              />
            </div>
          </div>
        </div>

        {/* Кнопки навигации */}
        <button
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={goToPrevious}
          aria-label="Предыдущий слайд"
        >
          <img src="/assets/icons/merch_arrow_left.svg" alt="" />
        </button>

        <button
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={goToNext}
          aria-label="Следующий слайд"
        >
          <img src="/assets/icons/merch_arrow_right.svg" alt="" />
        </button>

        {/* Dots навигация */}
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

