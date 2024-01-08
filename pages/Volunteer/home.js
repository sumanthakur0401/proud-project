import React from 'react'
import styles from '@/styles/Vol_styles/home.module.css'
import NavBar from '@/pages/Volunteer/components/navBar'
import ProfileBar from '@/pages/Volunteer/components/profileBar'

const home = () => {
  return (
    <>
      <NavBar />
      <div className={styles.midSection}>
        <div className={styles.forYouSection}>
          <p className={styles.forYouText}>For You</p>
          <hr/>
          <div className={styles.updateGreenBox}>
            <div className={styles.boxData}>
              <p className={styles.boxDescription}>Unleash your potential, join us as a volunteer teacher for the day.</p>
              <p className={styles.ngoName}>Saarthi</p>
            </div>
          </div>
        </div>
      </div>
      <ProfileBar/>
    </>
  )
}

export default home