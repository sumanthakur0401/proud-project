import React, { useState,useEffect } from 'react';
import NavBar from './navBar';
import ProfileBar from './profileBar';
import styles from '../../../styles/Vol_styles/layout.module.css'


const Layout = ({ children }) => {

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
      <div className={isChecked ? styles.backGroundBlack : styles.backGround}>
        <NavBar />
        <ProfileBar/>
        <div className="content">{children}</div>
        
        <div className={styles.switchModeButton}>
          <label className={styles.switch}>
            <input type="checkbox" onChange={handleToggle} checked={isChecked}/>
            <span className={styles.slider}></span>
          </label>
       </div>
       <div className={styles.switchText}>
          Switch 
          Mode!
       </div>
      </div>
    );
  };
  
  export default Layout;