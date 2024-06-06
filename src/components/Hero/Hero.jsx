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
                    I'm a fullstack software developer with 2.5 years of experience.<br /> 
                    Specialize in backend development using Python and Flask.<br />   
                    Emphasize on writing clean, readable, well documented code with effective error handling.  
                </p>
                <a href="mailto:alexchagan95@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
        );
    };