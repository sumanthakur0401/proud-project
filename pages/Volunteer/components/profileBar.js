import React from 'react'
import styles from '@/styles/Vol_styles/profileBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

const profileBar = () => {

  const [isNotificationHovered, setIsNotificationHovered] = React.useState(false);
  const [isMessageHovered, setIsMessageHovered] = React.useState(false);

  const handleNotificationHover = () => {
    setIsNotificationHovered(true);
  };

  const handleNotificationHoverOut = () => {
    setIsNotificationHovered(false);
  };

  const handleMessageHover = () => {
    setIsMessageHovered(true);
  };

  const handleMessageHoverOut = () => {
    setIsMessageHovered(false);
  };


  return (
    <div className={styles.profileBox}>
        <div className={styles.userProfile}>
            <img className={styles.userDp} src='/assets/dp.jpeg'/>
            <p className={styles.userFullName}>Suman thakur</p>
            <p className={styles.userShortDetail}>CEO @PROUD</p>
        </div>
        <div className={styles.profileBoxIconsButtons}>
            <div
              className={styles.notificationContainer}
              onMouseEnter={handleNotificationHover}
              onMouseLeave={handleNotificationHoverOut}
            >
              <a href=''>
                <img className={styles.Icons} src='/assets/notification.png' alt="Notification" />
              </a>
              {isNotificationHovered && (
                <div className={styles.notificationBox}>
                  <p className={styles.notificationText}>Notifications</p>
                  <hr />
                  <p className={styles.noText}>No new notifications!</p>
                </div>
              )}
            </div>

            <div
              className={styles.messageContainer}
              onMouseEnter={handleMessageHover}
              onMouseLeave={handleMessageHoverOut}
            >
              <a href=''>
                <img className={styles.Icons} src='/assets/message.png' alt="Message" />
              </a>
              {isMessageHovered && (
                <div className={styles.messageBox}>
                  <p className={styles.messageText}>Messages</p>
                  <hr />
                  <p className={styles.noMessageText}>No new messages!</p>
                </div>
              )}
            </div>

            <div
              className={styles.bookmarkContainer}
              onMouseEnter={handleMessageHover}
              onMouseLeave={handleMessageHoverOut}
            >
              <a href=''>
                <img className={styles.Icons} src='/assets/bookmark.png' alt="Message" />
              </a>
              {isMessageHovered && (
                <div className={styles.bookmarkBox}>
                  <p className={styles.bookmarkText}>Bookmarks</p>
                  <hr />
                  <p className={styles.noBookmarkText}>No Bookmarks yet!</p>
                </div>
              )}
            </div>
                
            <div
              className={styles.helpContainer}
              onMouseEnter={handleMessageHover}
              onMouseLeave={handleMessageHoverOut}
            >
              <a href=''>
                <img className={styles.Icons} src='/assets/help.png' alt="Message" />
              </a>
              {isMessageHovered && (
                <div className={styles.helpBox}>
                  <p className={styles.helpText}>If you need help, visit contact us page or click the button below!</p>
                  <button className={styles.contactUsButton}>
                    contact us
                  </button>
                </div>
              )}
            </div>    
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