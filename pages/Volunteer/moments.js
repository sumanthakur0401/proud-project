// components/Moments.js
import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Vol_styles/moments.module.css';
import Layout from './components/Layout';
import Link from 'next/link';
import HeartButton from './components/HeartButton';
import Preloader from './components/Preloader';

const Moments = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(null);
  const videoRefs = useRef(Array.from({ length: 5 }, () => React.createRef()));

  // Define video data with different names, photos, sources, and captions
  const videoData = [
    { username: 'Saarthi', photo: '/assets/tempDp/tempDp1.jpg', source: '/assets/videos/video1.mp4', caption: 'Dive into the experiences that shape our commitment to creating a better world. 🌏' },
    { username: 'Suman Thakur', photo: '/assets/tempDp/tempDp2.jpeg', source: '/assets/videos/video2.mp4', caption: 'From passion to action: Behind the scenes of our dedicated volunteers. Together, we are a force for good! ✨' },
    { username: 'Manan Tandon', photo: '/assets/tempDp/tempDp3.jpg', source: '/assets/videos/video3.mp4', caption: 'Behind each act of kindness lies a story of commitment. ' },
    { username: 'Shailee Nagarkoti', photo: '/assets/tempDp/tempDp4.jpg', source: '/assets/videos/video4.mp4', caption: 'In the tapestry of life, volunteers are the vibrant threads of hope.' },
    { username: 'Salam Zindgi', photo: '/assets/tempDp/tempDp5.jpg', source: '/assets/videos/video5.mp4', caption: '❤️' },
  ];
  const [likeCounts, setLikeCounts] = useState(Array(videoData.length).fill(0));

  useEffect(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0, // Play only when fully visible
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  // Observe all videoRefs
  videoRefs.current.forEach((videoRef) => {
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
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

  const handleLikeClick = (index, liked) => {
    const newLikeCounts = [...likeCounts];
    newLikeCounts[index] = liked ? newLikeCounts[index] + 1 : newLikeCounts[index] - 1;
    setLikeCounts(newLikeCounts);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds (adjust as needed)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <Layout>
      {loading && <Preloader />} {}
      {!loading && (
      <div className={styles.midSection}>
        <div className={styles.topText}>
          <img className={styles.momentsTextLogo} src='/assets/whiteProudLogo.png'/>
          <p className={styles.momentsText}>moments</p>
        </div>
        <hr/>
        <div className={styles.scrollSection}>
          {videoData.map((data, index) => (
            <div className={styles.items} key={index}>
              <div className={styles.nameDiv}>
                <div className={styles.profileNameAndPicture}>
                  <img src={data.photo} className={styles.profilePicture}/>
                  <p className={styles.userName}>{data.username}</p>
                </div>
                <img className={styles.threeDots} src='/assets/threeDots.png'/>
              </div>

              <p className={styles.caption}>{data.caption}</p>

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
                  <source src={data.source} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <HeartButton
                  index={index}
                  onClick={handleLikeClick}
                  count={likeCounts[index]}
                  isLiked={likeCounts[index] > 0}
                />
              </div>
            </div>
          ))}
          <div className={styles.lastBox}>
            <p className={styles.endText}>Done for the day!!!</p>
            
            <div className={styles.buttonsSection}> 
              <Link href="/Volunteer/wonderland">
              <button className={styles.exploreMoreButton}>Explore more!</button>
              </Link>

              <button className={styles.goTopButton}>back to top</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </Layout>
  );
};

export default Moments;
