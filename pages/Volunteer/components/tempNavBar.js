import React from 'react'
import styles from '@/styles/Vol_styles/tempNavBar.module.css'


const tempNavBar = () => {
  return (
    <div className={styles.tempNavDiv}>
        <div className={styles.navBar}>
            <img className={styles.logoImg} src='/assets/blueProudLogo.png'/>
            <a href='https://github.com/sumanthakur0401/proud-project'><img className={styles.githubIcon} src='/assets/githubIcon.png'/></a>
        </div>
    </div>
  )
}

export default tempNavBar