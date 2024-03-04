import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const cars = [
  {
    img: "/img/sedan-1.svg",
    text: "Sedan",
  },
  {
    img: "/img/sedan-2.svg",
    text: "Pickup",
  },
  {
    img: "/img/sedan-3.svg",
    text: "Large SUV",
  },
  {
    img: "/img/sedan-4.svg",
    text: "SUV",
  },
];

const plans = [
  {
    title: "Car wash",
    price: "$49.99",
    time: "45 min",
    features: [
      "Interior wipe down",
      "Exterior wipe down",
      "Interior vacuum",
      "Tire + rim cleaning",
    ],
  },
  {
    title: "Full detail",
    price: "$149.99",
    time: "120 min",
    features: [
      "Everything in mini detail",
      "Clay bar paint treatment",
      "Leather cleaning & conditioning",
      "Complete wax",
    ],
  },
  {
    title: "Mini detail",
    price: "$99.99",
    time: "90 min",
    features: [
      "Everything in car wash",
      "Interior shampoo",
      "Exterior hand wash",
      "Exterior wax",
    ],
  },
];

const Section3 = () => {
  const [selectedCar, setSelectedCar] = React.useState(2);

  return (
    <div className={styles.container}>
      <div className={styles.wrapperContainer}>
        <h1 className={styles.heading}>Pricing</h1>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            {cars.map((car, i) => (
              <div
                className={i === selectedCar ? styles.selectedCar : styles.car}
                key={i}
                onClick={() => setSelectedCar(i)}
              >
                <Image
                  width={150}
                  height={50}
                  alt="Sedan"
                  src="/img/sedan.svg"
                />
                <div className={styles.text}>Sedan</div>
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            {plans.map((plan, i) => {
              // const borderRadius =
              //   i === 0
              //     ? "0px 0px 0px 16px"
              //     : i === 2
              //     ? "0px 0px 16px 0px"
              //     : "";
              return (
                <div
                  className={styles.wrapperBottom}
                  key={i}
                  // style={{
                  //   borderRadius,
                  // }}
                >
                  <div className={styles.box1}>
                    <div className={styles.divWrapper}>
                      <div className={styles.text}>{plan.title}</div>
                    </div>
                    <div className={styles.text}>{plan.price}</div>
                  </div>
                  <div className={styles.box2}>
                    <Image
                      width={16}
                      height={16}
                      alt="Mdi clock time nine"
                      src="/img/mdi-clock-time-nine-outline-2.svg"
                    />
                    <div className="text">{plan.time}</div>
                  </div>
                  <div className={styles.box3}>
                    {plan.features.map((feature, i) => (
                      <div className={styles.wrapperBox3} key={i}>
                        <Image
                          width={16}
                          height={16}
                          alt="Material symbols"
                          src="/img/material-symbols-check-small-rounded-8.svg"
                        />
                        <div className="text">{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="frame-13">
            <div className="text-wrapper-8">MOST POPULAR</div>
          </div> 
      <PropertyPri
          buttonClassName="property-pri-instance"
          className="property-1-pri"
          text="Book a wash"
        /> 
       <div className="property-pri property-1-pri" /> 
       <div className="button property-pri-instance">Book a wash</div> */}
    </div>
  );
};

export default Section3;
