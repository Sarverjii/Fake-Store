import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to a server
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>How to Reach Us</h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className={styles.emailIcon}></i>
              </div>
              <h3>Email</h3>
              <p>fakestoreproject@example.com</p>
              <p>support@fakestoreexample.com</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className={styles.locationIcon}></i>
              </div>
              <h3>Location</h3>
              <p>123 React Avenue</p>
              <p>Web Development District</p>
              <p>Frontend City, JS 12345</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className={styles.phoneIcon}></i>
              </div>
              <h3>Phone</h3>
              <p>Main: (123) 456-7890</p>
              <p>Support: (123) 456-7891</p>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2 className={styles.sectionTitle}>Send Us a Message</h2>
          
          {formSubmitted ? (
            <div className={styles.successMessage}>
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Question about your project"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          )}
        </div>

        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>Is this a real store?</h3>
              <p>No, this is a learning project built with React and the Fake Store API. It's designed to demonstrate API integration skills and React component development.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Can I actually buy products here?</h3>
              <p>This is a demonstration project only. No actual products can be purchased through this application.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>What API are you using?</h3>
              <p>This project uses the <a href="https://fakestoreapi.com/" className={styles.link} target="_blank" rel="noopener noreferrer">Fake Store API</a>, which provides e-commerce product data for testing and prototyping.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Is this project open-source?</h3>
              <p>Yes! Feel free to check out the repository and contribute if you'd like to improve the project.</p>
            </div>
          </div>
        </div>

        <div className={styles.connectSection}>
          <h2 className={styles.sectionTitle}>Connect With Us</h2>
          
          <div className={styles.socialLinks}>
            <a href="https://github.com/sarverjii" className={styles.socialLink}>GitHub</a>
            <a href="https://www.linkedin.com/in/sarverjii/" className={styles.socialLink}>LinkedIn</a>
            <a href="https://sarverjii.github.io/Portfolio-Website/" className={styles.socialLink}>Website</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;