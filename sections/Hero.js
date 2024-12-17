import React from "react";
import styles from "./Hero.module.css";
import { Button } from "../shared/Button";

export const Hero = () => {
  return (
    <section className={styles.heroBlocks}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <div className={styles.title}>
                The furniture brand for the future, with timeless designs
              </div>
              <Button variant="outline">View collection</Button>
              <div className={styles.description}>
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </div>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <img
              loading="lazy"
              src="/images/hero/pic1.png"
              alt="Featured furniture"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
