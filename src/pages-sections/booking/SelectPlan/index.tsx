import React from "react";

// import PlanCard from "../cards/planCard";
// import AddOnCard from "../cards/AddOnCard";

import styles from "./styles.module.scss";
import Card from "./Card";
import Button from "@UI/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const planCards = [
  {
    title: "Car Wash",
    time: "45 mins",
    text: [
      "Interior wipe down",
      "Exterior wipe down",
      "Interior Vacuum",
      "Tire + Rim Cleaning",
    ],
  },
  {
    title: "Full Detail",
    time: "45 mins",
    text: [
      "Everything in Mini Detail +",
      "Clay Bar Paint Treatment",
      "Leather Cleaning & Conditioning",
      "Complete Wax",
    ],
  },
  {
    title: "Deluxe Detail",
    time: "45 mins",
    text: [
      "Everything in Full Detail +",
      "Shampoo Upholstery & Carpet",
      "Exterior Iron Remover",
      "Sealant Wax",
    ],
  },
];

const addOnCards = [
  {
    title: "Spray Wax",
    time: "15 mins",
    text: "Provides an extra layer of protection and a deep shine to your vehicle's exterior, ensuring it looks its best for longer",
  },
  {
    title: "Shampoo Upholstery & Carpet",
    time: "15 mins",
    text: "Removes dirt and stains from your vehicle's interior, leaving it fresh and clean, while also preserving the fabric's texture and color",
  },
];

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectPlan: React.FC<IProps> = ({ setStep }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button
          variant="outlined"
          className={styles.backBtn}
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={() => setStep((prev) => prev - 1)}
        >
          Back
        </Button>
        <h1>Select plan</h1>
        <div className={styles.mid}>
          <div className={styles.cardContainer}>
            <p>
              <span className={styles.text}>Select your washing plan for </span>
              <span className={styles.textBlue}>Maruti Swift</span>
            </p>
            <div className={styles.cardWrapper}>
              {planCards.map((card, i) => (
                <Card {...card} key={i} />
              ))}
            </div>
          </div>
          <div className={styles.cardContainer}>
            <p>
              <div className={styles.text}>Select add-ons</div>
            </p>
            <div className={styles.cardWrapper}>
              {addOnCards.map((card, i) => (
                <Card {...card} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <Button
            className={styles.nextBtn}
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => setStep((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
