import React, {useState,useEffect} from 'react';
import Layout from './components/Layout';
import Preloader from './components/Preloader';

const connect = () => {
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
      <div>

      </div>
      )}
    </Layout>
  )
}

export default connect