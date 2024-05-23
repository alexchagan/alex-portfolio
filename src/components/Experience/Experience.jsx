import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.legend}>
        <span>
          <span className={styles.redCircle}></span> Proficient
        </span>
        <span>
          <span className={styles.yellowCircle}></span> Advanced
        </span>
        <span>
          <span className={styles.greenCircle}></span> Basic
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {

            let underlineClass = '';
            if (skill.level === 'pro') {
              underlineClass = styles.redUnderline;
            } else if (skill.level === 'adv') {
              underlineClass = styles.yellowUnderline;
            } else if (skill.level === 'bas') {
              underlineClass = styles.greenUnderline;
            }

            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p className={underlineClass}>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
