import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}> About </h2>
        <div className={styles.content}>
            {/* <img src={getImageUrl("about/image")} alt="about image" className={styles.aboutImage}/> */}
        <ul className={styles.aboutItems}>
        
            <li className={styles.aboutItem}>
                <p> About Me</p>
            </li>

            <li className={styles.aboutItem}>
                {/* <img src={getImageUrl("about/image")} alt="cursor icon" /> */}
                <div className={styles.aboutItemText}>
                    <p>
                   
                    I am an undergraduate computer science student at the University of Colombo, currently in my second year.
                    My academic journey has equipped me with both backend and frontend development skills, 
                    with hands-on experience from my second-year project using PHP. </p>
                </div>
            </li>

            <li className={styles.aboutItem}> 
                <div className={styles.aboutItemText}>
                    <p>
                    I am also passionate about cybersecurity. I am currently enrolled in a Coursera cybersecurity course and
                    have completed the "Foundations of Cybersecurity" course, which is the first course in the
                    Google Cybersecurity Certificate program. I am continuing my learning journey by taking the 
                    next courses in this program. </p>
                </div>
            </li>


            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <p>
                    My educational journey began at St. Servatius College, where I was a senior member
                    of the Western Band and an active participant in sports, being part of both the 
                    Under 13 and Under 15 cricket teams. I also hold several sports certificates and have 
                    achieved notable placements in national-level music competitions.</p>
                </div>
            </li>


            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <p>
                    In my campus life, I have actively participated in sports and have earned several 
                    certificates in inter-faculty competitions.</p>
                </div>
            
            </li>

        </ul>

        </div>
    </section>
    
  );
};




