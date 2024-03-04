import React from "react";

import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "@UI/Button";

const Section1: React.FC<{}> = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.top}>
          <Image
            alt="Ic baseline discount"
            src="/img/ic-baseline-discount.svg"
            width={24}
            height={24}
          />
          <p>Book 2 cars and get 25% discount</p>
          <Image
            alt="Material symbols"
            src="/img/material-symbols-close.svg"
            width={20}
            height={20}
          />
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.header}>
            Experience The Ultimate <br />
            clean For Your Vehicle
          </h1>
          <p className={styles.text}>
            Get Your Car Shining! Schedule a Wash Today!
          </p>
        </div>
        <Button className={styles.btn} onClick={() => router.push("/booking")}>
          Get Started
        </Button>
      </div>
      <div className={styles.right}>
        <Image
          className="img"
          alt="Frame"
          src="/img/frame-1850.svg"
          width={530}
          height={384}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default Section1;
