import React from 'react'
import { useState, useEffect } from 'react';
import getProductsList from "../../API/getProductsList"
import styles from "./Products.module.css"
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import { FaClock, FaDesktop, FaMicrophone, FaMobile, FaTv, FaVideo } from 'react-icons/fa';


export default function Products() {

   const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getProductsList(149);
        setProducts(data);
      };
      fetchData();
    }, []);



    return (
      <div className={styles.pageContainer}>
        <h1>All Products</h1>

        <h2 className={styles.sectionTitle}>Shop by Category</h2>
              <div className={styles.categories}>
                <CategoryButton icon={FaTv} title="TV" />
                <CategoryButton icon={FaMicrophone} title="Audio" />
                <CategoryButton icon={FaDesktop} title="Laptop" />
                <CategoryButton icon={FaMobile} title="Mobile" />
                <CategoryButton icon={FaVideo} title="Gaming" />
                <CategoryButton icon={FaClock} title="Appliances" />
              </div>
        <div className={styles.productGrid}>
          {products.length === 0 ? (
            <p>Loading...</p>
          ) : (
            products.map(product => (
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
