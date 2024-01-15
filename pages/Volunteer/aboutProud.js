import React from 'react'
import styles from '@/styles/Vol_styles/aboutProud.module.css'
import TempNavBar from '@/pages/Volunteer/components/tempNavBar'

const aboutProud = () => {
  return (
  <>
  <TempNavBar/>
    <div className={styles.screen}>
    
        <div className={styles.aboutProudSection}>
            <img src="/assets/blueProudLogo.png" alt="Proud" className={styles.logoImg} />
            <h1 className={styles.describProudText}>Where NGOs meet eager volunteers, catalyzing change together.</h1>
            <div className={styles.buttonsSection}>
                <button className={styles.exploreButton}>
                    Explore now!
                </button>

                <button className={styles.contactButton}>
                    Contact us
                </button>
            </div>
        </div>
    
        <div className={styles.secondProudSection}>
            
        </div>
        <div className={styles.secondProudSection}>
            
            </div>
    </div>
  </>
    
  )
}

export default aboutProud