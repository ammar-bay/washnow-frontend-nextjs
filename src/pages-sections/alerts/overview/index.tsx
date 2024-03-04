import React from "react";
import styles from "./styles.module.scss";

const alertsArr = [
  {
    type: "Recent",
    alerts: [
      {
        title: "Vestibulum",
        time: "1hr",
        content:
          "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
      {
        title: "Malesuada Ipsum",
        time: "1d",
        content:
          "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
      {
        title: "Fermentum Venenatis Tortor",
        time: "1d",
        content:
          "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
    ],
  },
  {
    type: "Last week",
    alerts: [
      {
        title: "Vestibulum",
        time: "7d",
        content:
          "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
      {
        title: "Vestibulum",
        time: "7d",
        content:
          "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
      {
        title: "Vestibulum",
        time: "7d",
        content:
          "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
      {
        title: "Malesuada Ipsum",
        time: "8d",
        content:
          "adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
      {
        title: "Malesuada Ipsum",
        time: "8d",
        content:
          "adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
      {
        title: "Malesuada Ipsum",
        time: "8d",
        content:
          "adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
      },
    ],
  },
];

const Overview: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContainer}>
          <div className={styles.box}>
            <div className={styles.alertHeading}>Alerts</div>
            <div className={styles.boxContainer}>
              {alertsArr.map((alertArr, i) => (
                <div className={styles.alertsContainer} key={i}>
                  <div className={styles.textWrapper}>
                    <div className={styles.text}>{alertArr.type}</div>
                  </div>
                  <div className={styles.alertsWrapper}>
                    {alertArr.alerts.map((alert, i) => (
                      <div className={styles.alertContainer} key={i}>
                        <div className={styles.alertWrapper}>
                          <div className={styles.alertheadingContainer}>
                            <div className={styles.headingText}>
                              {alert.title}
                            </div>
                            <div className={styles.timeText}>{alert.time}</div>
                          </div>
                          <p className={styles.alertBody}>
                            <span className={styles.text}>{alert.content}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Overview;
