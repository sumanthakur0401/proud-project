import React, { useState, createContext, useEffect } from 'react';
import NavBar from './navBar';
import ProfileBar from './profileBar';
import styles from '../../../styles/Vol_styles/layout.module.css';

// Create a context for dark mode state
const DarkModeContext = createContext();

const Layout = ({ children }) => {
  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;
  
  const [isChecked, setIsChecked] = useState(() => {
    if (isLocalStorageAvailable) {
      const storedDarkMode = localStorage.getItem('darkMode');
      return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    } else {
      return false; // Fallback to default value if localStorage is not available
    }
  });

  useEffect(() => {
    if (isLocalStorageAvailable) {
      try {
        localStorage.setItem('darkMode', JSON.stringify(isChecked));
      } catch (error) {
        console.error('Error saving dark mode to localStorage:', error);
      }
    }
  }, [isChecked, isLocalStorageAvailable]);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <DarkModeContext.Provider value={{ isChecked, toggleDarkMode: handleToggle }}>
      <div className={isChecked ? styles.backGroundBlack : styles.backGround}>
        <NavBar />
        <ProfileBar />
        <div className={styles.content} style={{ transition: 'background-color 0.3s ease-in-out' }}>
          {children}
        </div>
      </div>
      <div className={styles.switchModeButton}>
        <label className={styles.switch}>
          <input type="checkbox" onChange={handleToggle} checked={isChecked} />
          <span className={styles.slider} />
        </label>
      </div>
      <div className={styles.switchText}>Switch Mode!</div>
    </DarkModeContext.Provider>
  );
};

export default Layout;
