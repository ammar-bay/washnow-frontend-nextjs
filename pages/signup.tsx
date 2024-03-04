import CreateAccount from "@pages-sections/signup/CreateAccount";
import SignUpForm from "@pages-sections/signup/SignUpForm";
import React from "react";

const SignUp: React.FC = () => {
  const [step, setStep] = React.useState(1);

  const Components: { [key: number]: React.ReactNode } = {
    0: <CreateAccount setStep={setStep} />,
    1: <SignUpForm />,
  };

  return <>{Components[step]}</>;
};

export default SignUp;
