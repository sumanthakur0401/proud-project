import React from 'react'
import { useEffect, useState } from 'react'
import styles from '@/styles/Vol_styles/backToTop.module.css'

const BackToTopButton = () => {
    
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 10){
                setBackToTopButton(true);
            }
            else{
                setBackToTopButton(false);
            }
        })
    },[]);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className={styles.container}>
        {backToTopButton && (
            <button className={styles.button} onClick={scrollUp}>
                <img className={styles.upIcon} alt='BackToTop' src='/assets/upButtonIcon.png'/>
            </button>
        )}
    </div>
  )
} 

export default BackToTopButton