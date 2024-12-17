import React from "react";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ image, title, price }) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img
          loading="lazy"
          src={image}
          alt={title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>£{price}</p>
      </div>
    </article>
  );
};
