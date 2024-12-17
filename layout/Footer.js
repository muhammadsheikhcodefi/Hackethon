import React from "react";
import styles from "./Footer.module.css";
import { NewsletterForm } from "../shared/NewsletterForm";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.linkGroups}>
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Menu</h3>
            <button className={styles.link}>New arrivals</button>
            <button className={styles.link}>Best sellers</button>
            <button className={styles.link}>Recently viewed</button>
            <button className={styles.link}>Popular this week</button>
            <button className={styles.link}>All products</button>
          </div>

          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Categories</h3>
            <button className={styles.link}>Crockery</button>
            <button className={styles.link}>Furniture</button>
            <button className={styles.link}>Homeware</button>
            <button className={styles.link}>Plant pots</button>
            <button className={styles.link}>Chairs</button>
            <button className={styles.link}>Crockery</button>
          </div>

          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Our company</h3>
            <button className={styles.link}>About us</button>
            <button className={styles.link}>Vacancies</button>
            <button className={styles.link}>Contact us</button>
            <button className={styles.link}>Privacy</button>
            <button className={styles.link}>Returns policy</button>
          </div>

          <div className={styles.newsletter}>
            <h3 className={styles.groupTitle}>Join our mailing list</h3>
            <NewsletterForm />
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.copyright}>Copyright 2022 Avion LTD</div>
          <div className={styles.socialLinks}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <img
                key={num}
                loading="lazy"
                src={`/icons/footer/${num}.svg`}
                alt="Social media"
                className={styles.socialIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
