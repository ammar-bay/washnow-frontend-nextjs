import React from "react";
import styles from "./styles.module.scss";
import Input from "@UI/Input";
import Button from "@UI/Button";
import { useRouter } from "next/router";

const inputs = ["First Name", "Last Name", "Email", "Password"];

const SignUpForm: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          alt="Logo"
          src="/img/undraw-diary-re-4jpc-1.svg"
        />
        <div className={styles.wrapperContainer}>
          <div className={styles.top}>
            <div className={styles.signUpFormContainer}>
              <div className={styles.textHeading}>Fill out this form</div>
              <p className={styles.text}>Please complete your information.</p>
            </div>
            <div className={styles.inputContainer}>
              {inputs.map((input, index) => (
                <div className={styles.inputWrapper} key={index}>
                  <Input
                    className={styles.inputClass}
                    type="textField"
                    placeholder={input}
                  />
                </div>
              ))}
              <Button
                className={styles.getStartedBtn}
                onClick={() => router.push("/signin")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
