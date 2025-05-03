import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import ProductCard from '../../components/ProductCard/ProductCard';
import getProductsList from '../../API/getProductsList';
import { FaClock, FaDesktop, FaMicrophone, FaMobile, FaTv, FaVideo } from 'react-icons/fa';
import styles from './Home.module.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsList(10);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Latest Tech at Best Prices</h1>
        <p>Find amazing deals on TVs, laptops, audio equipment and more.</p>
        <Link to="/products/">
          <button>Shop Now</button>
        </Link>
      </div>

      <h2 className={styles.sectionTitle}>Shop by Category</h2>
      <div className={styles.categories}>
        <CategoryButton icon={FaTv} title="TV" />
        <CategoryButton icon={FaMicrophone} title="Audio" />
        <CategoryButton icon={FaDesktop} title="Laptop" />
        <CategoryButton icon={FaMobile} title="Mobile" />
        <CategoryButton icon={FaVideo} title="Gaming" />
        <CategoryButton icon={FaClock} title="Appliances" />
      </div>

      <h2 className={styles.sectionTitle}>Featured Products</h2>
      <div className={styles.productGrid}>
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard id={product.id} />
            </Link>
          ))
          
        )}
      </div>
      <div className={styles.seemore}>
        <Link to="/products/">
            <button >See More</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
