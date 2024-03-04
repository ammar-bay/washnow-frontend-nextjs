import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useAuth } from "@contexts/authContext";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

interface IProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SideBarMenu: React.FC<IProps> = ({ step, setStep }) => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const options = [
    {
      name: "Account details",
      icon: (active: boolean) => (
        <PersonOutlinedIcon
          className={active ? styles.activeIcon : styles.optionIcon}
        />
      ),
    },
    {
      name: "Payment method",
      icon: (active: boolean) => (
        <SettingsOutlinedIcon
          className={active ? styles.activeIcon : styles.optionIcon}
        />
      ),
    },
    {
      name: "Addresses",
      icon: (active: boolean) => (
        <CreditCardOutlinedIcon
          className={active ? styles.activeIcon : styles.optionIcon}
        />
      ),
    },
    {
      name: "Log out",
      icon: (active: boolean) => (
        <LogoutOutlinedIcon
          className={active ? styles.activeIcon : styles.optionIcon}
        />
      ),
      OnClick: handleLogout,
    },
  ];

  return (
    <>
      <div className={styles.top}>
        <div className={styles.userImgContainer}>
          <img className={styles.userImg} src="/img/ellipse-78-1.png" alt="" />
          <img
            className={styles.cameraImg}
            alt="Frame"
            src="/img/frame-3838-1.svg"
          />
        </div>
        <div className={styles.nameTextContainer}>
          <div className={styles.nameText}>Kourosh</div>
          <div className={styles.numebrText}>340-0364</div>
        </div>
      </div>
      <div className={styles.bottom}>
        {options.map((option, index) => (
          <div
            className={styles.optionContainer}
            onClick={() => {
              option.OnClick && option.OnClick();
              setStep(index);
            }}
            key={index}
          >
            <div className={styles.optionWrapper}>
              {option.icon(step === index)}
              {step === index ? (
                <div className={styles.textActive}>{option.name}</div>
              ) : (
                <div className={styles.text}>{option.name}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBarMenu;
