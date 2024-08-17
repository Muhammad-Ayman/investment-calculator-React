import React from "react";
import { useState } from "react";
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
  const [result, setResult] = useState([]);

  const [investment, setInvestment] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInvestment((prevInvestment) => {
      const updatedInvestment = {
        ...prevInvestment,
        [name]: +value,
      };
      setResult(calculateInvestmentResults(updatedInvestment)); // Call clac with the new state
      return updatedInvestment;
    });
  };

  return (
    <>
      <Header />
      <Inputs handleInputChange={handleInputChange} investment={investment} />
      <Result result={result} />
    </>
  );
}

export default App;
