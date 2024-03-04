import React from "react";

import AlertDialogSlide from "@UI/Dialog";
import Button from "@UI/Button";
import Input from "@UI/Input";

import styles from "./styles.module.scss";

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
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCarDialog: React.FC<IProps> = ({ open, setOpen }) => {
  return (
    <AlertDialogSlide open={open} setOpen={setOpen}>
      <div className={styles.dialog}>
        <div className={styles.dialogContainer}>
          <h1 className={styles.addCarHeading}>Add car</h1>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.carContainer}>
                <div className={styles.carWrapper}>
                  <img
                    className={styles.carImg}
                    alt="Sedan"
                    src="/img/suv.svg"
                    height={40}
                    width={100}
                  />
                  <div className={styles.text}>SUV</div>
                </div>
                <div className={styles.carWrapper}>
                  <img
                    className={styles.carImg}
                    alt="Pickup"
                    src="/img/pickup.svg"
                  />
                  <div className={styles.text}>Pickup</div>
                </div>
              </div>
              <div className={styles.carContainer}>
                <div className={styles.carWrapper}>
                  <img
                    className={styles.carImg}
                    alt="Sedan"
                    src="/img/sedan.svg"
                    height={40}
                    width={100}
                  />
                  <div className={styles.text}>Sedan</div>
                </div>
                <div className={styles.carWrapper}>
                  <img
                    className={styles.carImg}
                    alt="Sedan"
                    src="/img/suv-2.svg"
                    height={40}
                    width={100}
                  />
                  <div className={styles.text}>Large SUV</div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              {inputs.map((input, i) => (
                <div className={styles.inputContainer} key={i}>
                  <div className={styles.label}>{input.label}</div>
                  <div className={styles.inputWrapper}>
                    <Input
                      placeholder={input.placeholder}
                      type="textField"
                      className={styles.inputClass}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}
          <div className={styles.bottom}>
            <Button
              className={styles.cancleBtn}
              variant="outlined"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button className={styles.saveBtn}>Save</Button>
          </div>
        </div>
      </div>
    </AlertDialogSlide>
  );
};

export default AddCarDialog;
