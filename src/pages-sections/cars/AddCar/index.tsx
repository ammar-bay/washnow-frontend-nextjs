import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@UI/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
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
  {
    name: "Honda Civic Sedan Red BTY-689",
    image: "/img/sedan.svg",
  },
];

const AddCar: React.FC = () => {
  const router = useRouter();
  const [addCar, setAddCar] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.selectCarHeading}>
            <h1>Select car</h1>
          </div>
          <div className={styles.mid}>
            <Grid container>
              {cars.map((car, i) => (
                <Grid
                  key={i}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
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
              variant="outlined"
              className={styles.addCarBtn}
              startIcon={<AddIcon />}
              onClick={() => setAddCar(true)}
            >
              Add Car
            </Button>
          </div>
        </div>
      </div>
      <AddCarDialog open={addCar} setOpen={setAddCar} />
    </>
  );
};

export default AddCar;
