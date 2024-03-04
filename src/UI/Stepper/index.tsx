import React from "react";

import styles from "./styles.module.scss";

interface IProps {
  activeStep: number;
  steps: {
    title: string;
    top: string;
  }[];
}

const Stepper: React.FC<IProps> = ({ activeStep, steps }) => {
  return (
    <div className={styles.stepperContainer}>
      <div className={styles.wrapper}>
        {steps.map((step, index) => {
          const colorText = index === activeStep ? "#008ccc" : "#666666";
          const colorDot = index <= activeStep ? "#008ccc" : "#BCBFC2";
          const colorLine = index < activeStep ? "#008ccc" : "#BCBFC2";
          return (
            <div
              key={index}
              className={styles.stepIconBase}
              style={{
                top: step.top,
              }}
            >
              <div
                className={styles.dot}
                style={{
                  backgroundColor: colorDot,
                }}
              />
              {index + 1 !== steps.length && (
                <div
                  className={styles.line}
                  style={{
                    backgroundColor: colorLine,
                  }}
                />
              )}

              <div
                className={styles.text}
                style={{
                  color: colorText,
                }}
              >
                {step.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
