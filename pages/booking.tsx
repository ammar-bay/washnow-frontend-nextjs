import React, { useState } from "react";
import SelectCar from "@pages-sections/booking/SelectCar";
import SelectPlan from "@pages-sections/booking/SelectPlan";
import Stepper from "@UI/Stepper";
import SelectDetailer from "@pages-sections/booking/SelectDetailer";
import Detailer from "@pages-sections/booking/Detailer";
import Payment from "@pages-sections/booking/Payment";
import BookingSuccessful from "@pages-sections/booking/Bookingsuccess";
import BookingHistory from "@pages-sections/booking/BookingHistory";

const steps = [
  {
    title: "Select car",
    top: "80px",
  },
  {
    title: "Select plan",
    top: "236px",
  },
  {
    title: "Select detailer",
    top: "392px",
  },
  {
    title: "Summary and payment",
    top: "548px",
  },
];

const BookingPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const [detailer, setDetailer] = useState();

  const Component: { [key: number]: React.ReactNode } = {
    0: <SelectCar setStep={setStep} />,
    1: <SelectPlan setStep={setStep} />,
    2: <SelectDetailer setStep={setStep} />,
    3: <Payment setStep={setStep} />,
    4: <BookingSuccessful />,
    5: <Detailer setStep={setStep} />,
  };

  return (
    <div
      className="booking"
      style={{
        height: "100%",
        // height: "calc(100% - 70px)",
        width: "100%",
        position: "relative",
      }}
    >
      {step <= 2 && <Stepper activeStep={step} steps={steps} />}
      {Component[step]}
      {/* <SelectCar setStep={setStep} /> */}
      {/* <SelectPlan setStep={setStep} /> */}
      {/* <SelectDetailer setStep={setStep} /> */}
      {/* <Detailer /> */}
      {/* <Payment /> */}
      {/* <BookingSuccessful/> */}
      {/* <BookingHistory /> */}
    </div>
  );
};

export default BookingPage;
