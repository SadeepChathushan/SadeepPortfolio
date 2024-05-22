import React from "react";

import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text} >
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
             <img src={getImageUrl("Contact/emailIcon.png")} alt="Email icon" />
             <a href="mailto:chathushan43sadeep@gmail.com">chathushan43sadeep@gmail.com </a>
            </li>

            <li className={styles.link}>
             <img src={getImageUrl("Contact/linkedinIcon.png")} alt="Linkedin icon" />
             <a href="https://www.linkedin.com/in/sadeep-chathushan-a9a675281/">linkedin.com/Sadeep-Chathushan </a>
            </li>

            <li className={styles.link}>
             <img src={getImageUrl("Contact/githubIcon.png")} alt="Github icon" />
             <a href="https://github.com/SadeepChathushan">github.com/SadeepChathushan </a>
            </li>
        </ul>
    </footer>
  );
};
