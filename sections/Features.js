import React from "react";
import styles from "./Features.module.css";

const features = [
  {
    icon: "/images/features/pic1.svg",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    icon: "/images/features/pic2.svg",
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    icon: "/images/features/pic3.svg",
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won't find better prices anywhere",
  },
  {
    icon: "/images/features/pic4.svg",
    title: "Recycled packaging",
    description:
      "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];

export const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>What makes our brand different</h2>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureBlock}>
            <img
              loading="lazy"
              src={feature.icon}
              alt=""
              className={styles.featureIcon}
            />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
