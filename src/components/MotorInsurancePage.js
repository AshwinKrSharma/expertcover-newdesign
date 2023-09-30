import React from "react";
import { useParams } from "react-router-dom";
import CarInsurance from "./CarInsurance/CarInsurance";
import BikeInsurance from "./BikeInsurance/BikeInsurance";
import Homepage from "./Homepage/Homepage";
import Header from "./Header";
import Footer from "./Footer";
import TaxiInsurance from "./TaxiInsurance/TaxiInsurance";

const MotorInsurancePage = () => {
  const { type } = useParams();

  let mototrInsuranceDesign;
  switch (type) {
    case "car":
      mototrInsuranceDesign = <CarInsurance />;
      break;
    case "bike":
      mototrInsuranceDesign = <BikeInsurance />;
      break;
    case "taxi":
      mototrInsuranceDesign = <TaxiInsurance />;
      break;

    default:
      mototrInsuranceDesign = <Homepage />;
  }

  return <div>{mototrInsuranceDesign}</div>;
};

export default MotorInsurancePage;
