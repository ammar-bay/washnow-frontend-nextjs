import React from "react";
import styles from "./styles.module.scss";
import Input from "@UI/Input";
import Button from "@UI/Button";
import { useRouter } from "next/router";

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const WelcomeBack: React.FC<IProps> = ({ setStep }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.logo} alt="Logo" src="/img/logo-2-blue.svg" />
        <div className={styles.wrapperContainer}>
          <div className={styles.top}>
            <div className={styles.welcomeBackContainer}>
              <div className={styles.textHeading}>Welcome back</div>
              <p className={styles.text}>Please login to your account</p>
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
                className={styles.signinBtn}
                onClick={() => setStep((prev) => prev + 1)}
              >
                Sign In
              </Button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.text}>Don’t have an account?</div>
            <div
              className={styles.textBlue}
              onClick={() => router.push("/signup")}
            >
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
