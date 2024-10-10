import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Website</h1>
      <p style={styles.subtitle}>Join us to explore more features and opportunities!</p>
      <div style={styles.buttonContainer}>
        <Link href="/sign-up" passHref>
          <button style={styles.button}>Sign Up</button>
        </Link>
        <Link href="/sign-in" passHref>
          <button style={styles.button}>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: '#2575fc',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
};



export default Home;
