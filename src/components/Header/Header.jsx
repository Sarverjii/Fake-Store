import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaDesktop, FaShoppingCart, FaBars } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  const [cartlength, setCartLength] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const updateCartLength = () => {
      const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartLength(stored.length);
    };

    updateCartLength();

    // Optional: Listen for cart updates via storage change
    window.addEventListener('storage', updateCartLength);
    
    // Polling every second in case storage event doesn't fire in same tab
    const interval = setInterval(updateCartLength, 1000);

    return () => {
      window.removeEventListener('storage', updateCartLength);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <FaDesktop aria-hidden="true" size={24} />
        <span>Fake Store</span>
      </Link>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? styles.active : ''}>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact Us</NavLink>
      </nav>

      <Link to="/cart" className={styles.cartIcon}>
        <FaShoppingCart color="white" size={22} />
        {cartlength > 0 && <span className={styles.cartCount}>{cartlength}</span>}
      </Link>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <FaBars color="white" size={24} />
      </div>
    </header>
  );
}

export default Header;
