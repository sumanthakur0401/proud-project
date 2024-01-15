import React from 'react'
import styles from '@/styles/Vol_styles/navBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';

const navBar = () => {
  const router = useRouter();

  const activeStyle = {
    color: '#4EB4FF',
    backgroundColor: '#CCF0FF',
    borderRadius: '10px',
    height: '50px',
    marginBottom: '20px',
    border: '4px solid #4EB4FF',
  };

  const defaultStyle = {
    color: '#868686',
    borderRadius: '10px',
    height: '50px',
    marginBottom: '20px',
    border: '4px solid white', 
  };
  return (
    <div className={styles.navBarBox}>
      <a href='/Volunteer/aboutProud'>
        <img className={styles.proudLogo} src='/assets/blueProudLogo.png'/>
      </a>
      <div className={styles.buttonBox}>
        <p style={router.pathname === '/Volunteer/home' ? activeStyle : defaultStyle}>
            <Link className={styles.buttons} href="/Volunteer/home"><img className={styles.navIconHome} src="/assets/home.png"/>Home</Link>
        </p>
        <p style={router.pathname === '/Volunteer/wonderland' ? activeStyle : defaultStyle}>
            <Link className={styles.buttons} href="/Volunteer/wonderland"><img className={styles.navIconWorld} src="/assets/world.png"/>Wonderland</Link>
        </p>
        <p style={router.pathname === '/Volunteer/moments' ? activeStyle : defaultStyle}>
            <Link className={styles.buttons} href="/Volunteer/moments"><img className={styles.navIconHeart} src="/assets/heart.png"/>Moments</Link>
        </p>
        <p style={router.pathname === '/Volunteer/info' ? activeStyle : defaultStyle}>
            <Link className={styles.buttons} href="/Volunteer/info"><img className={styles.navIconInfo} src="/assets/info.png"/>Info</Link>
        </p>
      </div>
    </div>
  )
}

export default navBar