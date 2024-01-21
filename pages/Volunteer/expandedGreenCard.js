import React from 'react'
import styles from '@/styles/Vol_styles/expandedGreenCard.module.css'
import Link from 'next/link'

const expandedGreenCard = () => {
  return (
    <>
     
      <div className={styles.midSection}>
        <div className={styles.ngoSection}>
          <p className={styles.ngoNameText}>Saarthi</p>
          <hr/>
        </div>
        <Link href='home'><img className={styles.backButtonIcon} src='/assets/backButtonIcon.png'/></Link>
        <div className={styles.ngoUpdateCard}>
        </div>
      </div>  
    </>
  )
}

export default expandedGreenCard