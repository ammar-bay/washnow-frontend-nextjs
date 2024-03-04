import React from "react";
import Accordion from "@UI/Accordion";
import styles from "./styles.module.scss";

const Section4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>FAQs</div>
        <div className={styles.bottom}>
          <Accordion text="What is the screening process?" />
          <Accordion text="I'm interest in becoming a washer" />
          <Accordion text="What is a paint correction?" />
          <Accordion text="Does washnow have a rain policy?" />
          <Accordion text="How do I contact washer?" />
          <Accordion text="How do I cancel my appointment?" />
          <Accordion text="What car type do I select?" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
