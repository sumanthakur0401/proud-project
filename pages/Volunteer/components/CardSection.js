// components/CardSection.js
import { useState } from 'react';
import styles from '@/styles/Vol_styles/CardSection.module.css';
import Link from 'next/link';


const CardSection = () => {
  const [currentCards, setCurrentCards] = useState(1);

  const nextCards = () => {
    setCurrentCards(current => (current === 1 ? 2 : 1));
  }

  const upArrowOpacity = currentCards === 2 ? 100 : 0;
  const downArrowOpacity = currentCards === 2 ? 0 : 100;

  const scrollUpAnimation = {
    transform: `translateY(${(currentCards - 1) * 5}%)`, // Adjust the translateY based on the currentCards
    transition: 'transform 0.2s ease', // Apply a smooth transition effect
  };
  const scrollDownAnimation = {
    transform: `translateY(${(currentCards -2) * 5}%)`, // Adjust the translateY based on the currentCards
    transition: 'transform 0.2s ease', // Apply a smooth transition effect
  };

  return (
    <div className={styles['card-container']}>

      <img
        className={styles.upArrowIcon}
        id="upArrow"
        src='/assets/upArrow.png'
        style={{ opacity: upArrowOpacity }}
        onClick={nextCards}
      />

      <div style={scrollUpAnimation}>
        <div className={`${styles.card} ${currentCards === 1 ? styles.active : ''}`} id="card1">
            <div className={styles.boxData}>
                <p className={styles.boxDescription}>Unleash your potential, join us as a volunteer teacher for the day. Your kindness matters.</p>
                <p className={styles.ngoName}>Saarthi</p>
                
                <div className={styles.buttonAndLocation}>
                    <div className={styles.ngoLocation}>
                    Sec 32, Chandigarh<img className={styles.locationImg} src='/assets/locationWhite.png'/>
                    </div>
                    <button className={styles.cardViewMoreButton}>
                        More
                    </button>
                </div>

            </div>
        </div>

        <div className={`${styles.card} ${currentCards === 1 ? styles.active : ''}`} id="card2">
            <div className={styles.boxData}>
                <p className={styles.boxDescription}>Volunteer at the animal shelter "spend quality time with adorable animals". Join now!🐾 </p>
                <p className={styles.ngoName}>People for animals</p>

                <div className={styles.buttonAndLocation}>
                    <div className={styles.ngoLocation}>
                    Sec 34, Chandigarh<img className={styles.locationImg} src='/assets/locationWhite.png'/>
                    </div>
                    <button className={styles.cardViewMoreButton}>
                        More
                    </button>
                </div>

            </div>
        </div>
      </div>  
      
      <div style={scrollDownAnimation}>
        <div className={`${styles.card} ${currentCards === 2 ? styles.active : ''}`} id="card3">
            <div className={styles.boxData}>
                <p className={styles.boxDescription}>Join our Clothing Drive! 🧥 Collect gently used clothes and later, at our Distribution Event, help us support those in need.💙 </p>
                <p className={styles.ngoName}>Salaam Zindagi Charitable Trust</p>

                <div className={styles.buttonAndLocation}>
                    <div className={styles.ngoLocation}>
                    Sec 11, Chandigarh<img className={styles.locationImg} src='/assets/locationWhite.png'/>
                    </div>
                    <button className={styles.cardViewMoreButton}>
                        More
                    </button>
                </div>

            </div>
        </div>

        <div className={`${styles.card} ${currentCards === 2 ? styles.active : ''}`} id="card4">
            <div className={styles.boxData}>
                <p className={styles.boxDescription}>🏥 Join our Health Fair! 🩺 Free screenings, info sessions, and activities. 🤝 Volunteers needed! Let's boost community health! </p>
                <p className={styles.ngoName}>Nav Chetna</p>

                <div className={styles.buttonAndLocation}>
                    <div className={styles.ngoLocation}>
                    Sec 4, Chandigarh<img className={styles.locationImg} src='/assets/locationWhite.png'/>
                    </div>
                    <button className={styles.cardViewMoreButton}>
                        More
                    </button>
                </div>

            </div>
        </div>
      </div>  

      <img src='/assets/downArrow.png' className={styles.downArrowIcon} id="downArrow" style={{ opacity: downArrowOpacity }} onClick={nextCards}/ >

    </div>
  );
};

export default CardSection;
