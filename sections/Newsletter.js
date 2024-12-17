import React from "react";
import styles from "./Newsletter.module.css";
import { NewsletterForm } from "../shared/NewsletterForm";

export const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Join the club and get the benefits</h2>
          <p className={styles.description}>
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};
