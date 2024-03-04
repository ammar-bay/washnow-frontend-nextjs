import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import Input from "@UI/Input"
import Button from "@UI/Button";

const inputs = [

]

const Section6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Image
            // className="letter-exchange"
            alt="Letter exchange"
            src="/img/letter-exchange-between-friends-1-1.svg"
            width={388}
            height={347}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.inputContainer}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.text}>First name</div>
                <Input type="textField" size="lg" className={styles.textInput} />
              </div>
              <div className={styles.column}>
                <div className={styles.text}>Last name</div>
                <Input type="textField" className={styles.textInput} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.text}>Mobile Number</div>
                <Input type="textField" size="lg" className={styles.textInput} />
              </div>
              <div className={styles.column}>
                <div className={styles.text}>Email</div>
                <Input type="textField" className={styles.textInput} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.text}>Message</div>
                <Input type="textField" className={styles.messageTextInput} />
              </div>
            </div>
          </div>
          <Button className={styles.btn}>Send message</Button>
        </div>
      </div>
    </div>
  );
};

export default Section6;
