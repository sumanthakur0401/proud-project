import React from 'react'
import styles from '@/styles/Vol_styles/profileBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

const profileBar = () => {
  return (
    <div className={styles.profileBox}>
        <div className={styles.userProfile}>
            <img className={styles.userDp} src='/assets/dp.jpeg'/>
            <p className={styles.userFullName}>Suman thakur</p>
            <p className={styles.userShortDetail}>CEO @PROUD</p>
        </div>
        <div className={styles.profileBoxIconsButtons}>
                <a href='/'><img className={styles.Icons} src='/assets/notification.png'/></a>
                
                <a href='/'><img className={styles.Icons} src='/assets/message.png'/></a>
                
                <a href='/'><img className={styles.Icons} src='/assets/bookmark.png'/></a>
                
                <a href='/'><img className={styles.Icons} src='/assets/help.png'/></a>
        </div>
        <div className={styles.Box1}>

        </div>
        <div className={styles.Box2}>

        </div>
        <div className={styles.Box3}>

        </div>
        <div className={styles.shortLinks}>
            <a href="/" className={styles.linksText}> About</a>
            <a href="/" className={styles.linksText}> Blog</a>
            <a href="/" className={styles.linksText}> Store</a>
            <a href="/" className={styles.linksText}> Efficacy</a>
            <a href="/" className={styles.linksText}> Carrers</a>
            <a href="/" className={styles.linksText}> Investors</a>
            <a href="/" className={styles.linksText}> Terms</a>
            <a href="/" className={styles.linksText}> Privacy</a>
        </div>
    </div>
  )
}

export default profileBar