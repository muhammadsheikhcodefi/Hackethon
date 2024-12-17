import React from "react";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.topNav}>
      <div className={styles.navContent}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d81950817f056517b80782120ca463511cf00875522007552066f9500fc541e?placeholderIfAbsent=true&apiKey=40dea1a7104143d787beebdd32822cd4"
          alt=""
          className={styles.menuIcon}
        />
        <div className={styles.brand}>Avion</div>
        <div className={styles.navIcons}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/72e73fc243d44823077c5165c62dec226cf67a378c6deab36aa6693e9af3a865?placeholderIfAbsent=true&apiKey=40dea1a7104143d787beebdd32822cd4"
            alt="Search"
            className={styles.icon}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b962bc50f60a9ec044648ac46a220e167b4a6bac6a1ffae30f05347a7af3d267?placeholderIfAbsent=true&apiKey=40dea1a7104143d787beebdd32822cd4"
            alt="Shopping cart"
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.mainLinks}>
        <button className={styles.navLink}>Plant pots</button>
        <button className={styles.navLink}>Ceramics</button>
        <button className={styles.navLink}>Tables</button>
        <button className={styles.navLink}>Chairs</button>
        <button className={styles.navLink}>Crockery</button>
        <button className={styles.navLink}>Tableware</button>
        <button className={styles.navLink}>Cutlery</button>
      </div>
    </nav>
  );
};
