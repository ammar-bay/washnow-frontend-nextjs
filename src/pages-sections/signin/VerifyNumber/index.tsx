import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Input from "@UI/Input";
import Button from "@UI/Button";
import { useRouter } from "next/router";
import { useAuth } from "@contexts/authContext";

const VerifyNumber: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const inputRefs = [
    useRef<HTMLInputElement>(),
    useRef<HTMLInputElement>(),
    useRef<HTMLInputElement>(),
    useRef<HTMLInputElement>(),
    useRef<HTMLInputElement>(),
    useRef<HTMLInputElement>(),
  ];

  const handleInputChange = (
    index: number,
    event: React.FormEvent<HTMLElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const newDigit = target.value;
    if (newDigit.length <= 1 && /^\d*$/.test(newDigit)) {
      if (newDigit.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleVerify = () => {
    console.log("verify");
    login();
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          alt="Undraw verified re"
          src="/img/undraw-verified-re-4io7-1.svg"
        />
        <div className={styles.top}>
          <div className={styles.topContainer}>
            <div className={styles.textHeading}>Verify your number</div>
            <p className={styles.text}>
              Please enter the 6-digit code <br />
              that we sent to your number
            </p>
          </div>
          <div className={styles.verifyContainer}>
            <div className={styles.inputContainerwrapper}>
              <div className={styles.inputWrapper}>
                {inputRefs.map((inputRef, index) => (
                  <Input
                    key={index}
                    ref={inputRef}
                    onChange={(event) => handleInputChange(index, event)}
                    type="textField"
                    className={styles.inputClass}
                    maxLength={1}
                  />
                ))}
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button
                className={styles.verifyBtn}
                onClick={() => handleVerify()}
              >
                Verify
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.text}>Didn’t receive 6-digit code?</div>
          <div className={styles.textBlue}>Resend</div>
        </div>
      </div>
    </div>
  );
};

export default VerifyNumber;
