import React from 'react';
import styles from './AboutUs.module.css';
import developerPhoto from '../../assets/Me.png';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>About Our Fake Store</h1>
        <p>Learning React through real-world API integration</p>
      </div>

      <div className={styles.content}>
        <div className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>About The Project</h2>
          <p>
            This e-commerce web application was built as a learning project to explore React and API integration. 
            The project uses the <a href="https://fakestoreapi.com/" className={styles.link} target="_blank" rel="noopener noreferrer">Fake Store API</a> to 
            fetch and display product data, demonstrating how to work with external data sources in a React application.
          </p>
          <p>
            As I'm still learning React, this project represents my journey into component-based architecture, 
            state management, and responsive design principles. The main focus was on understanding how to 
            fetch data from an API and present it in a user-friendly interface.
          </p>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>API Integration</h3>
              <p>Fetches real product data from Fake Store API</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Component Structure</h3>
              <p>Built with reusable React components</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Responsive Design</h3>
              <p>Optimized for all device sizes</p>
            </div>
            <div className={styles.featureCard}>
              <h3>CSS Modules</h3>
              <p>Scoped styling with module CSS</p>
            </div>
          </div>
        </div>

        <div className={styles.developerSection}>
          <h2 className={styles.sectionTitle}>About the Developer</h2>
          <div className={styles.developerProfile}>
            <div className={styles.photoContainer}>
              <img src={developerPhoto} alt="Developer" className={styles.developerPhoto} />
            </div>
            <div className={styles.developerInfo}>
              <h3>Learning Journey</h3>
              <p>
                Hello! I'm a React developer in training. This project represents my exploration into building 
                functional web applications with React. My goal was to practice implementing API calls, creating 
                a responsive interface, and organizing code into reusable components.
              </p>
              <p>
                Through this project, I've deepened my understanding of:
              </p>
              <ul className={styles.skillsList}>
                <li>React component architecture</li>
                <li>Working with external APIs</li>
                <li>State management in React</li>
                <li>CSS Modules for component styling</li>
                <li>Responsive design implementation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.techStack}>
          <h2 className={styles.sectionTitle}>Technologies Used</h2>
          <div className={styles.techList}>
            <div className={styles.techItem}>React</div>
            <div className={styles.techItem}>React Router</div>
            <div className={styles.techItem}>CSS Modules</div>
            <div className={styles.techItem}>Fake Store API</div>
            <div className={styles.techItem}>JavaScript ES6+</div>
          </div>
        </div>

        <div className={styles.futureSection}>
          <h2 className={styles.sectionTitle}>Future Plans</h2>
          <p>
            This project is still in development. Future enhancements will include:
          </p>
          <ul className={styles.futureList}>
            <li>Shopping cart functionality</li>
            <li>User authentication</li>
            <li>Product filtering and search</li>
            <li>Product reviews and ratings</li>
            <li>Checkout process simulation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;