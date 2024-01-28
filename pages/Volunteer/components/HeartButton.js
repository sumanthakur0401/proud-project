// components/HeartButton.js
import React, { useState } from 'react';
import styles from '@/styles/Vol_styles/HeartButton.module.css'; // Adjust the path based on your project structure

const HeartButton = ({ index, onClick, count, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleClick = () => {
    setLiked(!liked);
    onClick(index, !liked);
  };

  return (
    <div className={styles.buttonDiv}>
        <div className={`${styles.heartButton} ${liked ? styles.liked : ''}`} onClick={handleClick}>
      &#10084; 
    </div>
    <div className={styles.countNumber}>{count}</div>
    </div>
    
  );
};

export default HeartButton;
