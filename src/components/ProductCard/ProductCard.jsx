import React, { useEffect, useState } from 'react';
import getProduct from '../../API/getProduct';
import styles from './ProductCard.module.css';

export default function ProductCard({ id }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProduct(id);
            setProduct(data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className={styles.card}>
                <div className={styles.loadingBar}></div>
            </div>
        );
    }

    if (!product) return null;

    const originalPrice = product.discount > 0
        ? ((100 + product.discount)/100 * product.price).toFixed(2)
        : null;

    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <div className={styles.info}>
                <h3 className={styles.title}>{product.title}</h3>
                <div className={styles.priceRow}>
                    {originalPrice && <span className={styles.originalPrice}>${originalPrice}</span>}
                    <span className={styles.finalPrice}>${product.price}</span>
                </div>
                <div className={styles.meta}>{product.brand}</div>
            </div>
        </div>
    );
}
