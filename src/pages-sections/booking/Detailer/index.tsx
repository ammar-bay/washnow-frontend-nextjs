import React from "react";
import styles from "./styles.module.scss";
import Divider from "@UI/Divider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Button from "@UI/Button";

const reviewsArray = [
  {
    img: "/img/frame-4560-2.png",
    name: "Floyd Miles",
    text: "Nunc ut egestas libero, ac posuere purus egestas nunc posuere Nunc ut egestas libero nunc posuere Nunc ut nunc posuere.",
    date: "Feb 14, 2023",
  },
  {
    img: "/img/frame-4560.png",
    name: "Mark Zuck",
    text: "Nunc ut egestas libero, ac posuere purus egestas nunc posuere Nunc ut egestas libero nunc posuere Nunc ut nunc posuere.",
    date: "Feb 14, 2023",
  },
  {
    img: "/img/frame-4560.png",
    name: "Mark Zuck",
    text: "Nunc ut egestas libero, ac posuere purus egestas nunc posuere Nunc ut egestas libero nunc posuere Nunc ut nunc posuere.",
    date: "Feb 14, 2023",
  },
];

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Detailer: React.FC<IProps> = ({ setStep }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.detailerImgContainer}>
          <img
            className={styles.detailerBgImg}
            alt="Rectangle"
            src="/img/rectangle-229.svg"
          />
          <img
            className={styles.detailerImg}
            alt="Ellipse"
            src="/img/ellipse-39.svg"
          />
        </div>
        <div className={styles.detailerNameContainer}>
          <div className={styles.detailerName}>Ralph Edwards</div>
          <div className={styles.detailerPrice}>$119</div>
        </div>

        <hr className={styles.line} />

        <div className={styles.address}>
          <p className={styles.text}>1st Avenue, New York, USA - 385535</p>
          <p className={styles.p}>
            Nunc ut egestas libero, ac posuere purus. Vestibulum <br />
            accumsan nunc rutrum, lobortis massa sed, congu
          </p>
        </div>

        <hr className={styles.line} />

        <div className={styles.mid}>
          <div className={styles.calender}>
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

          <div className={styles.timeHeading}>Available time</div>
          <div className={styles.timingsContainer}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.time}>
                  <div className={styles.text}>08:30 AM</div>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.time}>
                  <div className={styles.text}>10:30 AM</div>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.time}>
                  <div className={styles.text}>02:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          className={styles.bookingBtn}
          onClick={() => setStep(3)}
        >
          Make reservation
        </Button>

        <hr className={styles.line} />

        <div className={styles.bottom}>
          <div className={styles.reviewHeading}>Reviews</div>
          <div className={styles.reviewsWrapper}>
            {reviewsArray.map((review, i) => (
              <div className={styles.review} key={i}>
                <img className={styles.reviewerImg} src={review.img} alt="" />
                <div className={styles.reviewDetail}>
                  <div className={styles.text}>{review.name}</div>
                  <img
                    className={styles.ratingsImg}
                    alt="Frame"
                    src="/img/frame-4670.svg"
                  />
                  <p className="p">{review.text} </p>
                  <div className={styles.dataText}>{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailer;
