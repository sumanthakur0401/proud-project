import React, { useState } from 'react'
import styles from '@/styles/Vol_styles/aboutProud.module.css'
import TempNavBar from '@/pages/Volunteer/components/tempNavBar'
import BackToTopButton from './components/BackToTopButton'

const aboutProud = () => {

    const [isRed, setIsRed] = useState(false);

    const changeColor = () => {
        setIsRed((prev) => !prev);
    };

  return (
  <>
    <TempNavBar/>
    <BackToTopButton/>
    <div className={styles.screen}>
    
        <div className={styles.aboutProudSection}>
            <img src="/assets/blueProudLogo.png" alt="Proud" className={styles.logoImg} />
            <h1 className={styles.describProudText}>Where NGOs meet eager volunteers, catalyzing change together.</h1>
            <div className={styles.buttonsSection}>
                <a href='/Volunteer/home' className={styles.exploreButton}>
                        Explore now!
                </a>
                <a href='' className={styles.contactButton}>
                    Contact us
                </a>
            </div>
        </div>
        
        <div className={styles.secondProudSection}>
            <div className={styles.dataContainer}>
                <div className={styles.demoBox}>
                    <p className={styles.demoText}>
                        click here to join us!
                    </p>
                    <button className={styles.demoBoxButton}>
                        Join now!
                    </button>
                </div>
                <div className={styles.aboutBoxData}>
                    <p className={styles.boxText}>
                        "Accessing volunteer opportunities is simplified through a single click."
                    </p>
                    <p className={styles.boxSubText}>
                         Easily find and join volunteer activities with just one click, making it simple and efficient for you to get involved and make a positive impact
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.thirdProudSection}>
            <div className={styles.thirdSectionDataContainer}>
                <div className={styles.thirdSectionAboutBoxData}>
                    <p className={styles.thirdSectionBoxText}>
                        "Discover a variety of NGOs in one place for effortless volunteering opportunities."
                    </p>
                    <p className={styles.thirdSectionBoxSubText}>
                    Effortlessly explore a range of non-profit organizations all in one place. This centralized platform makes it easy for you to discover various volunteering opportunities, ensuring a seamless and meaningful engagement with causes that matter to you
                    </p>
                </div>

                <div className={styles.thirdSectionDemoBox}>
                    <div className={styles.smallBoxes}></div>
                    <div className={styles.smallBoxes}></div>
                    <div className={styles.smallBoxes}></div>
                    <div className={styles.smallBoxes}></div>
                    <div className={styles.smallBoxes}></div>
                    <div className={styles.smallBoxes}></div>
                    <p className={styles.smallBoxesText}>Ngo's Wonderland</p>
                </div>
            </div>
        </div>

        <div className={styles.fourthProudSection}>
            <div className={styles.fourthSectionDataContainer}>

                <div className={styles.fourthSectionDemoBox}>
                    <p className={styles.scrollText}>scroll here</p>
                    <div className={styles.demoScroll}>
                        <div className={styles.smallContainer}>
                            <p className={styles.smallBoxText}>
                                Click heart if you like it
                            </p>
                            <div className={`${styles.heart} ${isRed ? styles.red : ''}`} onClick={changeColor}>
                                &#10084;
                            </div>
                        </div>
                        <div className={styles.smallContainer}>
                            <p className={styles.smallBoxText}>
                                Click heart if you like it
                            </p>
                            <div className={`${styles.heart} ${isRed ? styles.red : ''}`} onClick={changeColor}>
                                &#10084;
                            </div>
                        </div>
                        <div className={styles.smallContainer}>
                            <p className={styles.smallBoxText}>
                                Click heart if you like it
                            </p>
                            <div className={`${styles.heart} ${isRed ? styles.red : ''}`} onClick={changeColor}>
                                &#10084;
                            </div>
                        </div>
                        <div className={styles.smallContainer}>
                            <p className={styles.smallBoxText}>
                                Click heart if you like it
                            </p>
                            <div className={`${styles.heart} ${isRed ? styles.red : ''}`} onClick={changeColor}>
                                &#10084;
                            </div>
                        </div>
                    </div>
                    <p className={styles.scrollBoxesText}><img className={styles.proudLogoWithText} src='/assets/lightBlueProudLogo.png'/> Moments</p>
                </div>

                <div className={styles.fourthSectionAboutBoxData}>
                    <p className={styles.fourthSectionBoxText}>
                        "Explore 'Pr&#10084;ud Moments' - a place where good vibes and great deeds meet!"
                    </p>
                    <p className={styles.fourthSectionBoxSubText}>
                        Visit 'Pr&#10084;ud Moments' to showcase your achievements! Share photos and videos of your volunteering, and see NGOs highlight impactful activities
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.lastProudSection}>
            <div className={styles.lastBoxData}>
                <p className={styles.lastText}>Made by<img className={styles.lastProudLogo} src='/assets/blueProudLogo.png'/> with <span className={styles.lastHeart}> &#10084;</span>.</p>
                <div className={styles.buttonSection}>
                    <a href='/Volunteer/home' className={styles.lastButton}>Explore</a>
                    <a href='https://github.com/sumanthakur0401/proud-project' className={styles.lastButton}>GitHub</a>
                    <a className={styles.lastButton}>Contact</a>
                </div>
            </div>
        </div>
        
    </div>
  </>
    
  )
}

export default aboutProud