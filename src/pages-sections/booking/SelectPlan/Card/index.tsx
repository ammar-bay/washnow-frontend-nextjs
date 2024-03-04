import React from "react";
import styles from "./styles.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";

interface IProps {
  title: string;
  time: string;
  text: string | string[];
}

const Card: React.FC<IProps> = ({ text, time, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.text}>{title}</div>
      </div>
      <div className={styles.time}>
        <AccessTimeIcon className={styles.timeIcon} />
        <div className={styles.text}>{time}</div>
      </div>
      {Array.isArray(text) ? (
        text.map((text, index) => (
          <div key={index} className={styles.details}>
            <CheckIcon className={styles.checkIcon} />
            <div className={styles.text}>{text}</div>
          </div>
        ))
      ) : (
        <p className={styles.addOnText}>{text}</p>
      )}
    </div>
  );
};

export default Card;
