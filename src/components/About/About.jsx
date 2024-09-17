import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./About.module.css";

export const About = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(300, 300); // Size of the animation
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      wireframe: true, // Similar to the visual wrap effect
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5).normalize();
    scene.add(light);

    camera.position.z = 10;

    const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div ref={mountRef} className={styles.animation}></div>
        <div className={styles.aboutItemText}>
          <p>I am a motivated Computer Science undergraduate with a strong passion for Software Engineering, specializing in full-stack development.</p>
          <p>I work hard and am a quick learner, always striving to improve and maintain my knowledge.</p>
          <p>I thrive at solving complex challenges and quickly adapting to new technologies.</p>
        </div>
      </div>
    </section>
  );
};
