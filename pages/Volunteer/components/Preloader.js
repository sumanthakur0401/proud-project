// Preloader.js
import React from 'react';
import styles from '@/styles/Vol_styles/Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img className={styles.loader} src='/assets/blueProudLogo.png' alt='Logo' />
    </div>
  );
};

export default Preloader;
