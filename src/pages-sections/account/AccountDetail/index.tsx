import React from "react";
import styles from "./styles.module.scss";
import Input from "@UI/Input";
import Button from "@UI/Button";

const inputs = [
  {
    label: "First name",
    placeholder: "Jerico",
  },
  {
    label: "Last name",
    placeholder: "Nota",
  },
  {
    label: "Contact number",
    placeholder: "340-0364",
  },
  {
    label: "Email",
    placeholder: "",
  },
  {
    label: "Password",
    placeholder: "",
  },
];

const AccountDetail = () => {
  return (
    <>
      <h1 className={styles.accountHeading}>Account details</h1>
      <div className={styles.top}>
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
      </div>
      <div className={styles.bottom}>
        <Button className={styles.saveBtn}>Save</Button>
      </div>
    </>
  );
};

export default AccountDetail;
