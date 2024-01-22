import React, { useState, useEffect } from 'react';
import NavBar from './navBar';
import ProfileBar from './profileBar';
import styles from '../../../styles/Vol_styles/layout.module.css';

const Layout = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setIsChecked(storedDarkMode === 'true');
    }
  }, []);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    localStorage.setItem('darkMode', isChecked ? 'false' : 'true');
  };

  return (
    <div className={styles.wrapper}>
      {isChecked && (
        <div className={styles.backGroundBlack}>
          <NavBar />
          <ProfileBar />
          <div className="content">{children}</div>
        </div>
      )}
      {!isChecked && (
        <div className={styles.backGround}>
          <NavBar />
          <ProfileBar />
          <div className="content">{children}</div>
        </div>
      )}
      <div className={styles.switchModeButton}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={isChecked}
          />
          <span className={styles.slider} />
        </label>
      </div>
      <div className={styles.switchText}>Switch Mode!</div>
    </div>
  );
};

export default Layout;
