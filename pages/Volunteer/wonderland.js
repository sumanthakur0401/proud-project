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
          <p className={styles.wonderSubText}>
            A hub where volunteers can explore various NGO categories, simplifying their search.
          </p>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Environment</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='Environment illustration' src='/assets/illustration/environment.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Human Rights</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='HR illustration' src='/assets/illustration/humanRights.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Health</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='Health illustration' src='/assets/illustration/health.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Education</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='Education illustration' src='/assets/illustration/education.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Animal Welfare</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='AW illustration' src='/assets/illustration/animalWelfare.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Development</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='Development illustration' src='/assets/illustration/development.webp'/>
          </div>

          <div className={styles.boxes}>
          <div className={styles.textAndButton}>
              <p className={styles.boxName}>Emergency Relief</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='ER illustration' src='/assets/illustration/emergencyRelief.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Women's Rights</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='WR illustration' src='/assets/illustration/womenRights.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Children & Youth</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='CY illustration' src='/assets/illustration/childrenYouth.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>Disability</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='Disability illustration' src='/assets/illustration/disability.webp'/>
          </div>

          <div className={styles.boxes}>
            <div className={styles.textAndButton}>
              <p className={styles.boxName}>LGBTQ+</p>
              <img className={styles.rightArrow} src='/assets/rightWhiteArrow.png'/>
            </div>
            <img className={styles.boxImage} alt='Pride illustration' src='/assets/illustration/pride.webp'/>
          </div>

        </div>

      </div>
    </Layout>
  )
}

export default wonderland