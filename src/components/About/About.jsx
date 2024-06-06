import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img 
        src={getImageUrl("about/aboutImage.png")}
        alt="Me at a lecture"
        className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backendIcon.png")} 
            alt="Cursor icon"
            />
            <div>
              <h3>Backend Developer</h3>
              <p>Expertise in building RESTful APIs, designing and developing microservices, working with SQL and NoSQL databases, unit testing, and leveraging cloud platforms like AWS and Azure for deployment and scalability.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/fullstackIcon.png")} 
            alt="Server icon"
            />
            <div>
            <h3>Fullstack Developer</h3>
            <p>Currently working as a fullstack developer, working on an interactive web application using MERN stack. <br/> 80% Backend, 20% Frontend.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aiIcon.png")} 
            alt="UI icon"
            />
            <div>
            <h3>Machine Learning/Generative AI</h3>
              <p>Expertise in developing, training and deploying Machine Learning models. Integrating third-party Generative AI services with applications. </p>
            </div>
          </li>

        </ul>
        </div>
    </section>
  );
};

