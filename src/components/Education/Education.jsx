import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from '../../utils';  // Utility function for handling image paths

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>

      <div className={styles.educationItem}>
        <div className={styles.timeLocation}>
          <p>2022 - Present</p>
          <p>Colombo, Sri Lanka</p>
        </div>
        <div className={styles.institutionDetails}>
          <img src={getImageUrl("logo/UCSC.png")} alt="University Logo" className={styles.logo} /> {/* University logo */}
          <div className={styles.detailsText}>
            <h3>University of Colombo School of Computing</h3>
            <p>Bachelor of Science in Computer Science</p>
            <p>Current GPA: 2.3/4.00</p>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div> {/* Divider between sections */}

      <div className={styles.educationItem}>
        <div className={styles.timeLocation}>
          <p>2010 - 2019</p>
          <p>Matara, Sri Lanka</p>
        </div>
        <div className={styles.institutionDetails}>
          <img src={getImageUrl("logo/SSC.png")} alt="School Logo" className={styles.logo} /> {/* School logo */}
          <div className={styles.detailsText}>
            <h3>St.Servatius College, Matara</h3>
            <p>G.C.E. Advanced Level</p>
            <p>Combined Maths: A, Chemistry: C, Physics: S</p>
           
          </div>
        </div>
      </div>

    </section>
  );
};
