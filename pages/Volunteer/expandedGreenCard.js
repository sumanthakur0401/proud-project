import React from 'react'
import styles from '@/styles/Vol_styles/expandedGreenCard.module.css'
import NavBar from '@/pages/Volunteer/components/navBar'
import ProfileBar from '@/pages/Volunteer/components/profileBar'
import Link from 'next/link'


const expandedGreenCard = () => {
  return (
    <>
      <NavBar />
      <div className={styles.midSection}>
        <div className={styles.ngoSection}>
          <p className={styles.ngoNameText}>Saarthi</p>
          <hr/>
        </div>
        <Link href='home'><img className={styles.backButtonIcon} src='/assets/backButtonIcon.png'/></Link>
        <div className={styles.ngoUpdateCard}>

        </div>
      </div>  
      <ProfileBar/>
    </>
  )
}

export default expandedGreenCard