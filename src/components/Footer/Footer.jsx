import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <div className={styles.brand}>FakeStore</div>
          <div>Your one-stop shop for all your tech needs.</div>
        </div>

        <div className={styles.column}>
          <h2>Quick Links</h2>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={`${styles.column} ${styles.social}`}>
          <h2>Connect With Us</h2>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>

      <hr />

      <p className={styles.copy}>
        Made by <a href="https://sarverjii.github.io/Portfolio-Website/" target="_blank" rel="noopener noreferrer">Sarth Verma</a>
      </p>
      <p className={styles.copy}>
        © Virtually True. All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
