import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../API/products";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductSection.module.css";

export default function ProductSection({ title, category, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory(category).then(setProducts);
  }, [category]);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

