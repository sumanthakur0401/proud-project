import React from 'react'
import styles from '@/styles/Vol_styles/aboutProud.module.css'
import TempNavBar from '@/pages/Volunteer/components/tempNavBar'
import BackToTopButton from './components/BackToTopButton'

const aboutProud = () => {
  return (
  <>
  <TempNavBar/>
  <BackToTopButton/>
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
            <div className={styles.dataContainer}>
                <div className={styles.demoBox}>
                    <p className={styles.demoText}>
                        click here to join us!
                    </p>
                    <button className={styles.demoBoxButton}>
                        Join now!
                    </button>
                </div>
                <div className={styles.aboutBoxData}>
                    <p className={styles.boxText}>
                        "Accessing volunteer opportunities is simplified through a single click."
                    </p>
                    <p className={styles.boxSubText}>
                         Easily find and join volunteer activities with just one click, making it simple and efficient for you to get involved and make a positive impact
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.thirdProudSection}>
            <div className={styles.thirdSectionDataContainer}>
                <div className={styles.thirdSectionAboutBoxData}>
                    <p className={styles.thirdSectionBoxText}>
                        "Discover a variety of NGOs in one place with a single click for effortless volunteering opportunities.""
                    </p>
                    <p className={styles.thirdSectionBoxSubText}>
                        Easily find and join volunteer activities with just one click, making it simple and efficient for you to get involved and make a positive impact
                    </p>
                </div>

                <div className={styles.thirdSectionDemoBox}>
                    <p className={styles.thirdSectionDemoText}>
                        click here to join us!
                    </p>
                    <button className={styles.thirdSectionDemoBoxButton}>
                        Join now!
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  </>
    
  )
}

export default aboutProud