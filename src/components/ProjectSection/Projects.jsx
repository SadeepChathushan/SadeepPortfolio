import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from '../../utils';
import { FaGithub } from 'react-icons/fa'; 


export const Projects = () => {
    const projectss = [
        
        {
            title: "Amoral Clothing - Online Commerce and Workforce Management System",
            description: "This website will revolutionize the management of online orders, deliveries, stock inventory and T-shirt design, providing an all-in-one platform that enhances operational efficiency and customer satisfaction. It will feature a streamlined order and delivery system, stock management module and a customizable T-shirt design tool. Additionally, the platform will generate insightful reports, offering valuable data to drive informed decision-making and strategic growth for businesses.",
            image: "projects/Amoral1.png",
            techStack: ["HTML", "CSS", "JavaScript", "MySQL", "CanvasJs", "Google Map API"],
             githubLink : "https://github.com/Dilum-IR/Project_Amoral"
        }

        ,
        {
            "title": "MaternEase - Web-based Maternity and Child Clinic Management System",
            "description": "A web-based application designed to transform maternity and child clinic management in Sri Lanka. MaternEase introduces efficient appointment scheduling to reduce wait times and improve clinic operations, enhancing healthcare delivery for expectant mothers and children.",
            "image": "projects/MaternEase.jpg",
            "techStack": ["React", "React Vite", "Spring Boot", "MySQL", "Tailwind CSS", "Ant Design", "Flowbite"],
            "githubLink": "https://github.com/orgs/MaternEase/repositories"
        }
        
    ];

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                {projectss.map((project, id) => (
                    <div key={id} className={styles.projectCard}>
                        <div className={styles.projectImageContainer}>
                            <img src={getImageUrl(project.image)} alt={project.title} className={styles.projectImage} />
                        </div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <div className={styles.techStack}>
                            {project.techStack.map((tech, idx) => (
                                <span key={idx} className={styles.techBadge}>{tech}</span>
                            ))}
                        </div>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                            <FaGithub className={styles.githubIcon} /> {/* Icon Component */}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
