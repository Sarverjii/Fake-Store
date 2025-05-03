import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductCategory.module.css'; 
import getProductCategory from '../../API/getProductCategory';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import { FaClock, FaDesktop, FaMicrophone, FaMobile, FaTv, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';


export default function ProductCategory() {
  const { categoryID } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductCategory(categoryID);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [categoryID]);

  if (loading) {
    return (
      <div className={styles.card}>
        <div className={styles.loadingBar}></div>
      </div>
    );
  }

  if (!product) return null;

  const originalPrice = product.discount > 0
    ? ((100 + product.discount) * product.price / 100).toFixed(2)
    : null;

    return (
      <div className={styles.pageContainer}>
        

        <h2 className={styles.sectionTitle}>Shop by Category</h2>
              <div className={styles.categories}>
                <CategoryButton icon={FaTv} title="TV" />
                <CategoryButton icon={FaMicrophone} title="Audio" />
                <CategoryButton icon={FaDesktop} title="Laptop" />
                <CategoryButton icon={FaMobile} title="Mobile" />
                <CategoryButton icon={FaVideo} title="Gaming" />
                <CategoryButton icon={FaClock} title="Appliances" />
              </div>
              <h1>Showing Results for {categoryID.toUpperCase()}</h1>
        <div className={styles.productGrid}>
          {product.length === 0 ? (
            <p>Loading...</p>
          ) : (
            product.map(product => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                style={{ textDecoration: 'none' }}
              >
                <ProductCard id={product.id} />
              </Link>
            ))
          )}
        </div>
      </div>
    );
}
