import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      
      <div className={styles.content}>
        <h1 className={styles.title}>Sadeep Chathushan Nalindika</h1>
        <p className={styles.description}>
        I'm currently an undergraduate Computer Science student at the University of Colombo,
        deeply passionate about both backend and frontend development.
        </p>
        <a href="mailto:chathushan43sadeep@gmail.com.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <img
        src={getImageUrl("hero/IMG_0360.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
