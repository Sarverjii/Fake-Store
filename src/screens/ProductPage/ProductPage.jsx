import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProduct from '../../API/getProduct'; 
import styles from './ProductPage.module.css'; 

export default function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(productID);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [productID]);

  useEffect(() => {
    // Check if product is already in cart when component mounts
    const checkCartStatus = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const isInCart = cartItems.includes(parseInt(productID));
      setAddedToCart(isInCart);
    };
    
    checkCartStatus();
  }, [productID]);

  const handleAddToCart = () => {
    // Get existing cart items from local storage or initialize empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if product ID is already in cart
    // localStorage.clear("cartItems")
    if (!existingCartItems.includes(product.id)) {
      // Add the product ID to cart
      const updatedCart = [...existingCartItems, product.id];
      
      // Save updated cart to local storage
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      
      // Update UI to reflect added state
      setAddedToCart(true);

      window.location.reload()
    }
  };

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
    <div className={styles.productPage}>
      <div className={styles.productDetails}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
        </div>

        <div className={styles.infoContainer}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.productBrand}>Brand: {product.brand}</p>
          <p className={styles.productModel}>Model: {product.model}</p>
          <p className={styles.productColor}>Color: {product.color}</p>

          {originalPrice && (
            <div className={styles.priceContainer}>
              <span className={styles.originalPrice}>${originalPrice}</span>
              <span className={styles.discountedPrice}>${product.price}</span>
            </div>
          )}

          <div className={styles.productDescription}>
            <h2>Description:</h2>
            <p>{product.description}</p>
          </div>

          <div className={styles.addToCartContainer}>
            <button 
              className={`${styles.addToCartButton} ${addedToCart ? styles.added : ''}`} 
              onClick={handleAddToCart}
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}