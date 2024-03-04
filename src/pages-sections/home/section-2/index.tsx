import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const cards = [
  {
    img: "/img/mdi-car-search-outline.svg",
    heading: "Select wash plan",
    text: "Enter information about your car and select one of our plans",
  },
  {
    img: "/img/carbon-event-schedule.svg",
    heading: "Pick date and time",
    text: "Choose a date and time range you are available for a wash.",
  },
  {
    img: "/img/credit-card-02.svg",
    heading: "Pay online",
    text: "Enter your payment information and location of wash.",
  },
];

{
  /* <Image
              alt="Mdi car search"
              src="/img/mdi-car-search-outline.svg"
              width={48}
              height={48}
            />
            <div className={styles.heading}>Select wash plan</div>
            <p className={styles.text}>
              Enter information about your <br />
              car and select one of our plans
            </p>
          </Card> */
}

// How IT WORKS
const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.text}>How it works</div>
      </div>

      <div className={styles.bottom}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <Image alt="Mdi car search" src={card.img} width={48} height={48} />
            <div className={styles.heading}>{card.heading}</div>
            <p className={styles.text}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
