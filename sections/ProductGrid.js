import React from "react";
import styles from "./ProductGrid.module.css";
import { ProductCard } from "../shared/ProductCard";
import { Button } from "../shared/Button";

export const ProductGrid = ({ title, products, columns = 4 }) => {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.productsGrid} style={{ "--columns": columns }}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <Button variant="secondary" className={styles.viewButton}>
        View collection
      </Button>
    </section>
  );
};
