import React, {useState,useEffect} from 'react';
import Layout from './components/Layout'
import styles from '@/styles/Vol_styles/contact.module.css';
import Preloader from './components/Preloader';


const contact = () => {
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
          <p className={styles.momentsText}>Contact Us</p>
        <hr/>
        
          <form className={styles.queryForm}>
            <p className={styles.headText}>Submit a request</p>
            <label className={styles.lable}>Enter your fullname*
              <input className={styles.input} type="text" />
            </label>

            <label className={styles.lable}>Enter yout Email Address*
              <input className={styles.input} type="text" />
            </label>

            <label className={styles.lable}>What best describes the reason you're contacting us today?*
              <input className={styles.input} type="text" />
            </label>

            <label className={styles.lable}>Description*
              <textarea className={styles.textArea}/>
            </label>
            
            <button className={styles.submitButton}>submit</button>
          </form>
      </div>
      )}
    </Layout>
  )
}

export default contact