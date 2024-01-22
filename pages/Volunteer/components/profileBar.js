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
        <div className={styles.threeDotsBox}>
            <div className={styles.boxText}>
              Earn badges
            </div>
            <img className={styles.threeDots} src='/assets/threeDots.png'/>
          </div>
          <p className={styles.boxSubText}>Complete 9 more volunteer experiences to start earning badges.</p>
          <div className={styles.badgesBox}>
            <img className={styles.badge} src='/assets/brMedal.png'/>
            <img className={styles.badge} src='/assets/slrMedal.png'/>
            <img className={styles.badge} src='/assets/gldMedal.png'/>
          </div>
        </div>
        <div className={styles.Box2}>
          <div className={styles.threeDotsBox}>
            <div className={styles.boxText}>
              Upcoming Rewards
            </div>
            <img className={styles.threeDots} src='/assets/threeDots.png'/>
          </div>
          <p className={styles.boxSubText}>Volunteer and unlock rewards as a token of our gratitude.</p>
          <div className={styles.rewardSection}>
            <img className={styles.rewardBarImg} src='/assets/rewardBar.png'/>
            <img className={styles.giftBox} src='/assets/gift.png'/>
          </div>
        </div>
        <div className={styles.Box3}>
        <div className={styles.threeDotsBox}>
            <div className={styles.boxText}>
              Get verified
            </div>
            <img className={styles.threeDots} src='/assets/threeDots.png'/>
          </div>
          <p className={styles.boxSubText}>You are so close to get verified. Click more to know more.</p>
          <div className={styles.rewardSection}>
            <button className={styles.boxMoreButton}>
              More
            </button>
            <img className={styles.giftBox} src='/assets/verified.png'/>
          </div>
        </div>
        <div className={styles.shortLinks}>
            <a href="/Volunteer/components/Layout" className={styles.linksText}> About</a>
            <a href="" className={styles.linksText}> Blog</a>
            <a href="" className={styles.linksText}> Store</a>
            <a href="" className={styles.linksText}> Efficacy</a>
            <a href="" className={styles.linksText}> Carrers</a>
            <a href="" className={styles.linksText}> Investors</a>
            <a href="" className={styles.linksText}> Terms</a>
            <a href="" className={styles.linksText}> Privacy</a>
        </div>
    </div>
  )
}

export default profileBar