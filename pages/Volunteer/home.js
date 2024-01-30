import React, {useState, useEffect} from 'react';
import styles from '@/styles/Vol_styles/home.module.css'
import CardSection from '@/pages/Volunteer/components/CardSection'
import Layout from './components/Layout';
import Preloader from './components/Preloader';

const home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 second
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
 
  return (
    <Layout>
       {loading && <Preloader />}
      {!loading && (
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
         )}
    </Layout>
  )
}

export default home