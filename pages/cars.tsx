import AddCar from "@pages-sections/cars/AddCar";
import React from "react";
import NavBar from "@components/NavBar";

const Cars: React.FC = () => {
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      <AddCar />
    </div>
  );
};

export default Cars;
