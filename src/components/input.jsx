import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

const Inputs = ({ handleInputChange, investment }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            min="0"
            value={investment.initialInvestment}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            min="0"
            value={investment.annualInvestment}
            onChange={handleInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            min="0"
            value={investment.expectedReturn}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label>Duration (Years)</label>
          <input
            type="number"
            name="duration"
            min="0"
            value={investment.duration}
            onChange={handleInputChange}
          />
        </p>
      </div>
    </div>
  );
};
export default Inputs;
