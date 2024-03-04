import React from "react";
import styles from "./styles.module.scss";
import Button from "@UI/Button";
import { useRouter } from "next/router";

const BookingSuccessful = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContainer}>
          <div className={styles.top}>
            <div className={styles.layer1}>
              <div className={styles.layer2}>
                <img
                  className={styles.img}
                  alt="Group"
                  src="/img/group-294.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.mid}>
            <div className={styles.headingText}>Car wash booked</div>
            <p className={styles.bodyText}>
              Your payment is successful. Please check the washers status at
              Bookings page
            </p>
          </div>
          <div className={styles.bottom}>
            <Button onClick={() => router.push("/")}>Go Home</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessful;
