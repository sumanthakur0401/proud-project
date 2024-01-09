// ThreeCards.js
import { useState, useEffect } from 'react';
import styles from '@/styles/Vol_styles/scrollBar.module.css';

const ScrollBar = () => {
  const totalCards = 8; // Total number of cards
  const visibleCards = 3; // Number of cards to show at a time

  const [cards, setCards] = useState(Array.from({ length: totalCards }, (_, index) => index + 1));
  const [startIndex, setStartIndex] = useState(0);

  const handleNextCard = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePreviousCard = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const visibleCardIndices = Array.from({ length: visibleCards }, (_, index) => (startIndex + index) % totalCards);

  useEffect(() => {
    const topCard = document.querySelector(`.${styles.active}`);
    if (topCard) {
      topCard.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'; // Adjusted transition properties
      topCard.style.transform = 'scale(1.2)';
      topCard.style.opacity = 1; // Added opacity for smoother visibility
    }

    return () => {
      // Cleanup animation on unmount
      if (topCard) {
        topCard.style.transition = 'none';
        topCard.style.transform = 'none';
        topCard.style.opacity = 0;
      }
    };
  }, [startIndex]);

  return (
    <div className={styles.container}>
      {startIndex !== 0 && (
        <button className={styles.button} onClick={handlePreviousCard}>
          Previous Card
        </button>
      )}
      {visibleCardIndices.map((index, i) => (
        <div
          key={cards[index]}
          className={`${styles.card} ${i === 0 && styles.active} ${i === 0 ? styles['card-1'] : i === 1 ? styles['card-2'] : styles['card-3']}`}
        >
          <h2>Card {cards[index]}</h2>
        </div>
      ))}
      <button className={styles.button} onClick={handleNextCard}>
        Next Card
      </button>
    </div>
  );
};

export default ScrollBar;
