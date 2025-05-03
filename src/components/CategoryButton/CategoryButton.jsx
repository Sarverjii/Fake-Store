import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryButton.module.css';

export default function CategoryButton({ icon: Icon, title }) {
  return (
    <Link to={`/product/category/${title.toLowerCase()}`} className={styles.button}>
      <Icon className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </Link>
  );
}
