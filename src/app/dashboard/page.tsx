import React from 'react';

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Your Dashboard</h1>
      <p style={styles.subtitle}>Here you can manage your activities and settings</p>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Profile</h2>
          <p style={styles.cardContent}>View and edit your profile information.</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Settings</h2>
          <p style={styles.cardContent}>Adjust your preferences and account settings.</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Notifications</h2>
          <p style={styles.cardContent}>Manage your notifications and alerts.</p>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
  },
  cardContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#2575fc',
    marginBottom: '10px',
  },
  cardContent: {
    fontSize: '1rem',
    color: '#777',
  },
};
