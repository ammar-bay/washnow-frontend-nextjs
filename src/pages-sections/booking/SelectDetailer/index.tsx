import React from "react";

import Button from "@UI/Button";
import Input from "@UI/Input";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import styles from "./styles.module.scss";

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const detailersList = [
  {
    name: "Arlene McCoy",
    image: "/img/ellipse-38-4.png",
    ratingsImage: "/img/frame-4491-2.svg",
    times: ["07:30 AM", "09:30 AM", "01:30 AM"],
    price: "$150",
  },
  {
    name: "Ronald Richards",
    image: "/img/ellipse-38-3.png",
    times: ["08:30 AM", "10:30 AM", "02:30 PM"],
    price: "$119",
  },
  {
    name: "Kristin Watson",
    image: "/img/ellipse-38-2.png",
    times: ["09:30 AM", "11:30 AM", "03:30 PM"],
    price: "$160",
  },
  {
    name: "Cameron William",
    image: "/img/ellipse-38.png",
    times: ["10:30 AM", "12:30 PM", "07:30 AM"],
    price: "$100",
  },
  {
    name: "Cameron William",
    image: "/img/ellipse-38.png",
    times: ["10:30 AM", "12:30 PM", "07:30 AM"],
    price: "$100",
  },
];

const SelectDetailer: React.FC<IProps> = ({ setStep }) => {
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
        <h1>Select detailer</h1>
        <div className={styles.top}>
          <div className={styles.left}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                defaultValue={dayjs("2022-04-17T15:30")}
                sx={{
                  "& .MuiInputBase-root .MuiInputBase-input": {
                    height: "100%",
                    // padding: "0 16px",
                  },
                  ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "1.5px solid #DFDFDF",
                    borderRadius: "16px",
                  },
                  "& .MuiOutlinedInput-root ": {
                    "&:hover fieldset": {
                      border: "1.5px solid #DFDFDF",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1.5px solid #B3B3B3",
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>
          <div className={styles.right}>
            <div className={styles.searchInput}>
              <SearchIcon className={styles.searchIcon} />
              <Input
                type="textField"
                placeholder="Search"
                className={styles.input}
              />
            </div>
            <Button variant="contained" className={styles.searchBtn}>
              Search
            </Button>
          </div>
        </div>
        <div className={styles.mid}>
          {detailersList.map((detailer, i) => (
            <div className={styles.detailerWrapper} key={i}>
              <div
                className={styles.detailerDetails}
                onClick={() => setStep(5)}
              >
                <img
                  className={styles.detailerImg}
                  alt="Ellipse"
                  src={detailer.image}
                />
                <div className={styles.detailerName}>
                  <div className={styles.detailerNameText}>
                    <div className={styles.text}>{detailer.name}</div>
                  </div>
                  <img
                    className={styles.detailerRatings}
                    alt="Frame"
                    src="/img/frame-4491-2.svg"
                  />
                </div>
              </div>
              <div className={styles.timings}>
                {detailer.times.map((time, i) => (
                  <div className={styles.time} key={i}>
                    <div className={styles.text}>{time}</div>
                  </div>
                ))}
              </div>
              <div className={styles.price}>
                <div className={styles.text}>{detailer.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <Button
            variant="contained"
            className={styles.continueBtn}
            onClick={() => setStep((prev) => prev + 1)}
          >
            Make reservation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectDetailer;
