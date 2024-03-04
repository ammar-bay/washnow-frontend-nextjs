import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Grid } from "@mui/material";

import Button from "@UI/Button";
import AlertDialogSlide from "@UI/Dialog";
import Input from "@UI/Input";

import styles from "./styles.module.scss";
import AddCarDialog from "@components/AddCarDialog";

const cars = [
  {
    name: "Honda Civic Sedan Black ABC-1234",
    image: "/img/sedan.svg",
  },
  {
    name: "Honda Civic Sedan Red BTY-689",
    image: "/img/sedan.svg",
  },
  {
    name: "Honda Civic Sedan Red BTY-689",
    image: "/img/sedan.svg",
  },
];

const inputs = [
  {
    label: "Make",
    placeholder: "Make",
  },
  {
    label: "Model",
    placeholder: "Model",
  },
  {
    label: "Variant",
    placeholder: "Variant",
  },
];

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelectCar: React.FC<IProps> = ({ setStep }) => {
  const router = useRouter();
  const [addCar, setAddCar] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Button
            variant="outlined"
            className={styles.backBtn}
            startIcon={<KeyboardArrowLeftIcon />}
            onClick={() => router.back()}
          >
            Back
          </Button>
          <div className={styles.selectCarHeading}>
            <h1>Select car</h1>
            <Button
              variant="icon"
              className={styles.addCarBtn}
              startIcon={<AddIcon />}
              onClick={() => setAddCar(true)}
            >
              Add Car
            </Button>
          </div>
          <div className={styles.mid}>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              {cars.map((car, i) => (
                <Grid
                  key={i}
                  item
                  sm={12}
                  md={6}
                  lg={4}
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div className={styles.card}>
                    <Image src={car.image} height={33} width={100} alt="Car" />
                    <div className={styles.textWrapper}>
                      <div className={styles.text}>Sedan</div>
                      <p>{car.name}</p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
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

      <AddCarDialog open={addCar} setOpen={setAddCar} />
    </>
  );
};

export default SelectCar;
