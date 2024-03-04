import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "@UI/Button";

const Section5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <p className={styles.heading}>
            Do you need help with your appointment?
          </p>
          <p className={styles.text}>
            Send us an SMS, or call (424) 353-4606&nbsp;&nbsp;
            <br />
            9:00 AM and 6:00 PM Mon-Sun.
          </p>
        </div>
        <Button
          style={{
            backgroundColor: "#ffffff",
            color: "black",
            padding: "10px 14px",
            gap: "10px",
          }}
        >
          <Image alt="Phone" src="/img/phone.svg" width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};

export default Section5;
