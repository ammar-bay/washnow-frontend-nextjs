import React from "react";
import styles from "./styles.module.scss";
import Button from "@UI/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Alert: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContainer}>
          <div className={styles.box}>
            <div className={styles.alertContainer}>
              <Button
                variant="icon"
                className={styles.backBtn}
                startIcon={<KeyboardArrowLeftIcon />}
              >
                Back
              </Button>
              <div className={styles.alertWrapper}>
                <div className={styles.headingContainer}>
                  <div className={styles.headingText}>Vestibulum</div>
                  <p className={styles.timeText}>03 may 2023, 10:02 AM</p>
                </div>
                <div className={styles.alertBody}>
                  <p className={styles.textWrapper}>
                    <span className={styles.text}>
                      minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit mollit.
                      Exercitation veniam consequat sunt nostrud amet.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
