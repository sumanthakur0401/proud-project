import React from 'react'
import styles from '@/styles/Vol_styles/home.module.css'
import NavBar from '@/pages/Volunteer/components/navBar'
import ProfileBar from '@/pages/Volunteer/components/profileBar'
import CardSection from '@/pages/Volunteer/components/CardSection';

const home = () => {
  return (
    <>
      <NavBar />
      <div className={styles.midSection}>
        <div className={styles.forYouSection}>
          <p className={styles.forYouText}>For You</p>
          <hr/>
          {/* <div className={styles.updateGreenBox}>
            <div className={styles.boxData}>
              <p className={styles.boxDescription}>Unleash your potential, join us as a volunteer teacher for the day. Your kindness matters.</p>
              <p className={styles.ngoName}>Saarthi</p>
            </div>
          </div>
          <div className={styles.updateGreenBox}>
            <div className={styles.boxData}>
              <p className={styles.boxDescription}>Volunteer at the animal shelter "spend quality time with adorable animals". Join now!🐾 </p>
              <p className={styles.ngoName}>People for animals</p>
            </div>
          </div>
          
          <img className={styles.downArrowIcon} src='/assets/downArrow.png'/> */}
          <CardSection />
        </div>
         
                 
  {/*-------------------------------- Near You Section -----------------------------------*/}
        <div className={styles.nearYouSection}>
          <div className={styles.nearYouText}>Near You <p className={styles.italic}>(chandigarh)</p></div>
          <hr/>
          <div className={styles.nearYouBoxes}>
            <div className={styles.ngoBox}>

            </div>
            <div className={styles.ngoBox}>

            </div>
            <div className={styles.ngoBox}>

            </div>
            <div className={styles.ngoBox}>

            </div>
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.viewAllButton}>View all</button>
          </div>
        </div>

      </div>
      <ProfileBar/>
    </>
  )
}

export default home