import VerifyNumber from "@pages-sections/signin/VerifyNumber";
import WelcomeBack from "@pages-sections/signin/WelcomeBack";
import React from "react";

const SignIn: React.FC = () => {
  const [step, setStep] = React.useState(0);

  const Components: { [key: number]: React.ReactNode } = {
    0: <WelcomeBack setStep={setStep} />,
    1: <VerifyNumber  />,
  };

  return <>{Components[step]}</>;
};

export default SignIn;
