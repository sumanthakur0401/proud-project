import React from 'react';
import styles from '@/styles/Vol_styles/wonderland.module.css'
import Layout from './components/Layout';

const wonderland = () => {
  
  return (
    <Layout>
      <div className={styles.midSection}>
        <p className={styles.wonderYouText}>NGO's Wonderland</p>
        <hr/>

        <div className={styles.scrollMidSection}>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Environment</p>
            <img className={styles.boxImage} src='/assets/illustration/environment.png'/>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Human Rights</p>
            <img className={styles.boxImage} src='/assets/illustration/humanRights.png'/>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Health</p>
            <img className={styles.boxImage} src='/assets/illustration/health.png'/>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Education</p>
            <img className={styles.boxImage} src='/assets/illustration/education.png'/>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Animal Welfare</p>
            <img className={styles.boxImage} src='/assets/illustration/animalWelfare.png'/>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Development</p>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Emergency Relief</p>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Women's Rights</p>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Children and Youth</p>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Cultural</p>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>Disability</p>
          </div>
          <div className={styles.boxes}>
            <p className={styles.boxName}>LGBTQ+</p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default wonderland