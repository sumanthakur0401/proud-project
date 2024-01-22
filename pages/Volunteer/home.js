import React, { useState,useEffect } from 'react';
import styles from '@/styles/Vol_styles/home.module.css'
import CardSection from '@/pages/Volunteer/components/CardSection'
import Layout from './components/Layout';

const home = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Load the initial state from local storage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setIsChecked(storedDarkMode === 'true');
    }
  }, []);

  const handleToggle = () => {
    // Toggle the state
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    
    // Store the new state in local storage
    localStorage.setItem('darkMode', newChecked.toString());
  };
  return (
    <Layout>
      <div className={styles.midSection}>
        <div className={styles.forYouSection}>
          <p className={styles.forYouText}>For You</p>
          <hr/>
          <CardSection />
        </div>
  {/*-------------------------------- Near You Section -----------------------------------*/}
        <div className={styles.nearYouSection}>
          <div className={styles.nearYouText}>Near You <p className={styles.italic}>(chandigarh)</p></div>
          <hr/>
          <div className={styles.nearYouBoxes}>
            <div className={styles.ngoBox}>
              <img className={styles.cardImg} src='/assets/eduCare.png'/>
              <p className={styles.cardText}>
                EduCARE India
              </p>
            </div>
            <div className={styles.ngoBox}>
              <img className={styles.cardImg} src='/assets/salamZindgi.png'/>
              <p className={styles.cardText}>
                salamZindgi
              </p>
            </div>
            <div className={styles.ngoBox}>
              <img className={styles.cardImg} src='/assets/helpAgeIndia.png'/>
              <p className={styles.cardText}>
                helpage india
              </p>
            </div>
            <div className={styles.ngoBox}>
              <img className={styles.cardImg} src='/assets/eduCare.png'/>
              <p className={styles.cardText}>
               Arrive SAFE
              </p>
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.viewAllButton}>View all</button>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default home