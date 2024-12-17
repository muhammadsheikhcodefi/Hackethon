import React from "react";
import styles from "./About.module.css";
import { Button } from "../shared/Button";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <div className={styles.textColumn}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <p className={styles.description}>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. Handmade,
              and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.
            </p>
          </div>
          <Button variant="secondary">Get in touch</Button>
        </div>
        <div className={styles.imageColumn}>
          <img
            loading="lazy"
            src="/images/about/pic1.png"
            alt="Our studio"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </section>
  );
};
