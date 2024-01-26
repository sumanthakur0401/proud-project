// components/Moments.js
import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Vol_styles/moments.module.css';
import Layout from './components/Layout';

const Moments = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(null);
  const videoRefs = useRef(Array.from({ length: 5 }, () => React.createRef()));

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0, // Play only when fully visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe all videoRefs, not just the first 3
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const index = videoRefs.current.findIndex((ref) => ref.current === entry.target);
      if (index !== -1) {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          entry.target.play(); // Play the fully visible video
          setVisibleVideoIndex(index); // Update visibleVideoIndex for muting
        } else {
          entry.target.pause(); // Pause if not fully visible
          setVisibleVideoIndex(null); // Reset visibleVideoIndex to avoid state conflicts
        }
      }
    });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Layout>
      <div className={styles.midSection}>
        <div className={styles.topText}>
          <img className={styles.momentsTextLogo} src='/assets/whiteProudLogo.png'/>
          <p className={styles.momentsText}>moments</p>
        </div>
        <hr/>
        <div className={styles.scrollSection}>
          {Array.from({ length: 5 }, (_, index) => (
            <div className={styles.items} key={index}>
              <div className={styles.nameDiv}>
                <div className={styles.profileNameAndPicture}>
                  <img src='/assets/tempDp.jpeg' className={styles.profilePicture}/>
                  <p className={styles.userName}>Saarthi</p>
                </div>
                <img className={styles.threeDots} src='/assets/threeDots.png'/>
              </div>
              <div className={styles.videoContainer} key={index}>
                <div className={styles.buttonDiv}>
                  <button className={styles.muteButton} onClick={toggleMute}>
                    {isMuted ? 'Unmute' : 'Mute'}
                  </button>
                </div>
                <video 
                  autoPlay 
                  muted={isMuted || visibleVideoIndex !== index} 
                  loop 
                  playsInline 
                  ref={videoRefs.current[index]} 
                  className={styles.videos}
                >
                  <source src={`/assets/videos/video${index + 1}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Moments;
