import React, { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      try {
        const parsed = JSON.parse(storedItems);
        setCartItems(parsed);
      } catch (error) {
        console.error("Error parsing cartItems from localStorage:", error);
        setCartItems([]);
      }
    }
  }, []);

  const updateProducts = (id, productData) => {
    setProducts(prev => {
      const filtered = prev.filter(p => p.id !== id);
      return [...filtered, { id, ...productData }];
    });
  };

  useEffect(() => {
    const totalSum = products.reduce((sum, product) => sum + (product.price || 0), 0);
    setTotal(totalSum.toFixed(2));
  }, [products]);


  const buyNow = () => {
    alert("Items Bought")
    localStorage.clear("cartItems")
    window.location.reload()
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.heading}>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>No Items In Cart</p>
      ) : (
        <>
          <div className={styles.items}>
            {cartItems.map((productId) => (
              <CartItem
                key={productId}
                id={productId}
                onLoad={updateProducts}
              />
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Total: <span>${total}</span></h2>
            <button className={styles.buyBtn} onClick={buyNow}>Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
}
