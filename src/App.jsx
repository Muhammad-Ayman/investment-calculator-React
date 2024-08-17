import React from "react";
import Header from "./components/header.jsx";
import Inputs from "./components/input.jsx";
import Result from "./components/result.jsx";
import { calculateInvestmentResults } from "./util/investment.js";

const areAllValuesNonNull = (obj) => {
  return Object.values(obj).every(
    (value) => value !== null && value !== undefined && value !== ""
  );
};

function App() {
  return (
    <>
      <Header />
      <Inputs
        clac={(obj) => {
          if (areAllValuesNonNull(obj)) {
            console.log(calculateInvestmentResults(obj));
          }
        }}
      />

      <Result />
    </>
  );
}

export default App;
