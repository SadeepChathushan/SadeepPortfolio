import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';


// Function to chunk array into smaller arrays of a specified size
const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };
  
  export const Experience = () => {
    // Chunk skills into rows of 5
    const chunkedSkills = chunkArray(skills, 3);
  
    return (
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
          {chunkedSkills.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.skillsRow}>
              {row.map((skill, id) => (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p className={styles.skillTitle}>{skill.title}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  };