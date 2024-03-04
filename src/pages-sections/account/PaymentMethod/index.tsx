import React from "react";
import styles from "./styles.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AlertDialogSlide from "@UI/Dialog";
import Button from "@UI/Button";
import Input from "@UI/Input";

const paymentOptions = ["Master Card", "Union pay", "American express"];
const PaymentMethod = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={styles.paymentMethodContainer}>
        <h1 className={styles.paymentMethodHeading}>Payment method</h1>
        <div className={styles.paymentMethodWrapper}>
          {paymentOptions.map((paymentOption, i) => (
            <div className={styles.paymentOptionContainer} key={i}>
              <div className="text-wrapper-3">{paymentOption}</div>
              <ArrowRightIcon className={styles.arrowIcon} />
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button
            className={styles.addPaymentMethodButton}
            onClick={() => setOpen(true)}
          >
            Add Payment Method
          </Button>
        </div>
      </div>

      <AlertDialogSlide open={open} setOpen={setOpen}>
        <div className={styles.dialog}>
          <h1 className={styles.paymentMethodHeading}>Payment method</h1>
          <div className={styles.inputContainer}>
            <div className={styles.column}>
              <div className={styles.text}>Card information</div>
              <div className={styles.column} style={{ gap: 0 }}>
                <div className={styles.inputWrapper}>
                  <Input
                    type="textField"
                    size="lg"
                    className={styles.textInput}
                    placeholder="1234 1234 1234 1234"
                    style={{ borderRadius: "16px 16px 0px 0px" }}
                  />
                  <img
                    className={styles.paymentCardOptionsImg}
                    alt="Frame"
                    src="/img/frame-4613.svg"
                  />
                </div>
                <div className={styles.row}>
                  <Input
                    type="textField"
                    size="lg"
                    className={styles.textInput}
                    placeholder="CVC"
                    style={{ borderRadius: "0px 0px 0px 16px", borderTop: 0 }}
                  />
                  <Input
                    type="textField"
                    size="lg"
                    className={styles.textInput}
                    placeholder="CVC"
                    style={{
                      borderRadius: "0px 0px 16px 0px",
                      borderTop: 0,
                      marginLeft: "-3px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.text}>Name on card</div>
              <div className={styles.inputWrapper}>
                <Input
                  type="textField"
                  size="lg"
                  className={styles.textInput}
                />
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button
              className={styles.addPaymentMethodButton}
              onClick={() => setOpen(true)}
            >
              Add Payment Method
            </Button>
          </div>
        </div>
      </AlertDialogSlide>
    </>
  );
};

export default PaymentMethod;
