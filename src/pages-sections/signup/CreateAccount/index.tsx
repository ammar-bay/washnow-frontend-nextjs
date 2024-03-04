import React from "react";
import styles from "./styles.module.scss";
import Button from "@UI/Button";
import Input from "@UI/Input";

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const CreateAccount: React.FC<IProps> = ({ setStep }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          alt="Logo"
          src="/img/undraw-secure-login-pdn4-1.svg"
        />
        <div className={styles.wrapperContainer}>
          <div className={styles.top}>
            <div className={styles.createAccountContainer}>
              <div className={styles.textHeading}>Create an account</div>
              <p className={styles.text}>
                We will send a verification code
                <br /> on your phone number.
              </p>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.inputWrapper}>
                <Input
                  className={styles.inputClass}
                  type="textField"
                  placeholder="Phone Number"
                />
              </div>
              <Button
                className={styles.signupBtn}
                onClick={() => setStep((prev) => prev + 1)}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.text}>Already have an account?</div>
            <div
              className={styles.textBlue}
              onClick={() => setStep((prev) => prev + 1)}
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
