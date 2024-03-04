import React, { useState } from "react";
import AccountDetail from "@pages-sections/account/AccountDetail";
import PaymentMethod from "@pages-sections/account/PaymentMethod";
import Address from "@pages-sections/account/Address";
import SideBarMenu from "@pages-sections/account/SideBarMenu";
import useWindowSize from "@hooks/useWindowSize";
import { CSSProperties } from "react";

const container: CSSProperties = {
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const wrapper: CSSProperties = {
  height: "calc(100% - 70px)",
  display: "flex",
  width: "100%",
};

const left: CSSProperties = {
  backgroundColor: "#f6f8f9",
  display: "flex",
  flex: "1",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "5%",
  gap: "5%",
};

const right: CSSProperties = {
  flex: "2",
  paddingTop: "5%",
  display: "flex",
  justifyContent: "center",
};

const rightWrapper: CSSProperties = {
  width: "50%",
  alignItems: "flex-start",
  display: "inline-flex",
  flexDirection: "column",
  gap: "40px",
};

const options = [
  {
    name: "Account details",
    icon: "/img/user-01.svg",
  },
  {
    name: "Payment method",
    icon: "/img/settings-01.svg",
  },
  {
    name: "Addresses",
    icon: "/img/credit-card-01.svg",
  },
  {
    name: "Log out",
    icon: "/img/log-out-01.svg",
  },
];

const Account = () => {
  const [step, setStep] = useState(1);
  const component: { [key: number]: React.ReactNode } = {
    0: <AccountDetail />,
    1: <PaymentMethod />,
    2: <Address />,
  };

  const windowSize = useWindowSize();

  return (
    <div className="container" style={container}>
      <div className="wrapper" style={wrapper}>
        <div className="left" style={left}>
          {/* {windowSize.width > 900 && ( */}
          <SideBarMenu step={step} setStep={setStep} />
          {/* )} */}
        </div>
        <div className="right" style={right}>
          <div className="rightWrapper" style={rightWrapper}>
            {component[step]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
