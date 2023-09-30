import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CarInsurance from "./components/CarInsurance/CarInsurance";
import Homepage from "./components/Homepage/Homepage";
import BikeInsurance from "./components/BikeInsurance/BikeInsurance";
import TaxiInsurance from "./components/TaxiInsurance/TaxiInsurance";
import HealthInsurance from "./components/HealthInsurance/HealthInsurance";
import MotorInsurancePage from "./components/MotorInsurancePage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/motor/:type",
        element: <MotorInsurancePage />,
      },
      {
        path: "/health-insurance",
        element: <HealthInsurance />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
