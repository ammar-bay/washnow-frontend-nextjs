import React from "react";
import styles from "./styles.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@UI/Button";
import AlertDialogSlide from "@UI/Dialog";
import Input from "@UI/Input";

const addressOptions = [
  "Pacific View Mall, 3301 E Main St...",
  "Pacific View Mall, 3301 E Main St...",
  "Pacific View Mall, 3301 E Main St...",
];

const inputs = [
  {
    label: "Street",
    placeholder: "",
  },
  {
    label: "Country",
    placeholder: "Country",
  },
  {
    label: "City",
    placeholder: "City",
  },
  {
    label: "State",
    placeholder: "State",
  },
  {
    label: "Zip",
    placeholder: "Zip",
  },
];

const Address = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={styles.addressesContainer}>
        <h1 className={styles.addressesHeading}>Addresses</h1>
        <div className={styles.addressesWrapper}>
          {addressOptions.map((addressOption, i) => (
            <div className={styles.addressesOptionContainer} key={i}>
              <div className="text-wrapper-3">{addressOption}</div>
              <ArrowRightIcon className={styles.arrowIcon} />
            </div>
          ))}
        </div>
        <div className={styles.btnContainer} onClick={() => setOpen(true)}>
          <Button className={styles.addAddressButton}>Add new address</Button>
        </div>
      </div>
      <AlertDialogSlide open={open} setOpen={setOpen}>
        <div className={styles.dialog}>
          <h1 className={styles.addressesHeading}>Addresses</h1>
          {inputs.map((input, i) => (
            <div className={styles.inputContainer} key={i}>
              <div className={styles.label}>{input.label}</div>
              <div className={styles.inputWrapper}>
                <Input
                  placeholder={input.placeholder}
                  type="textField"
                  className={styles.input}
                />
              </div>
            </div>
          ))}
          <div className={styles.btnContainer}>
            <Button className={styles.addAddressButton}>Add new address</Button>
          </div>
        </div>
      </AlertDialogSlide>
    </>
  );
};

export default Address;
