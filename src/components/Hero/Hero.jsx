import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () =>
    {
        return( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Alex</h1>
                <p className={styles.description}>
                    I'm a software developer with 2.5 years of experience.
                    Proficient backend skills and basic frontend skills.<br />   
                    Python expert and a ML/AI enthusiast.  
                </p>
                <a href="mailto:alexchagan95@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
        );
    };