import React from 'react'
import styles from '@/styles/Vol_styles/navBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

const navBar = () => {
  const router = useRouter();

  const activeStyle = {
    color: '#4EB4FF',
    backgroundColor: '#CCF0FF',
    borderRadius: '10px',
    height: '50px',
    marginBottom: '10px',
    border: '4px solid #4EB4FF',
  };

  const defaultStyle = {
    color: '#868686',
    borderRadius: '10px',
    height: '50px',
    marginBottom: '10px',
    border: '4px solid white', 
  };
  return (
    <div className={styles.navBarBox}>
      <div className={styles.buttonBox}>
        <p style={router.pathname === '/Volunteer/home' ? activeStyle : defaultStyle}>
            <Link className={styles.buttons} href="/Volunteer/home">Home</Link>
        </p>
        <p style={router.pathname === '/Volunteer/wonderland' ? activeStyle : defaultStyle}>
            <Link className={styles.buttons} href="/Volunteer/wonderland">Wonderland</Link>
        </p>
        <p style={router.pathname === '/Volunteer/moments' ? activeStyle : defaultStyle}>
            <Link className={styles.buttons} href="/Volunteer/moments">Moments</Link>
        </p>
        <p style={router.pathname === '/Volunteer/info' ? activeStyle : defaultStyle}>
            <Link className={styles.buttons} href="/Volunteer/info">Info</Link>
        </p>
      </div>
    </div>
  )
}

export default navBar