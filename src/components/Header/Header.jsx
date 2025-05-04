import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaDesktop, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  const [cartLength, setCartLength] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateCartLength = () => {
      const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartLength(stored.length);
    };

    updateCartLength();
    window.addEventListener('storage', updateCartLength);
    const interval = setInterval(updateCartLength, 1000);

    return () => {
      window.removeEventListener('storage', updateCartLength);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <FaDesktop size={24} />
          <span>Fake Store</span>
        </Link>

        <nav className={styles.desktopNav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? styles.active : ''}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact Us</NavLink>
        </nav>

        <div className={styles.rightSection}>
          <Link to="/cart" className={styles.cartIcon}>
            <FaShoppingCart size={22} />
            {cartLength > 0 && <span className={styles.cartCount}>{cartLength}</span>}
          </Link>

          <div className={styles.hamburger} onClick={toggleMenu}>
            <FaBars size={24} />
          </div>
        </div>
      </header>

      {/* Side Drawer & Backdrop */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.closeBtn} onClick={closeMenu}>
          <FaTimes size={22} />
        </div>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>Products</NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>Contact Us</NavLink>
      </div>

      {isMenuOpen && <div className={styles.backdrop} onClick={closeMenu}></div>}
    </>
  );
}

export default Header;
