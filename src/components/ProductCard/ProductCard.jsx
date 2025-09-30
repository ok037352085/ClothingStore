import styles from "./ProductCard.module.css";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      <button className={styles.btn} onClick={() => addToCart(product)}>加入購物車</button>
    </div>
  );
}