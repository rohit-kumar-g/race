import React, { useState } from "react";
import { EmiCalculatorStyled } from "../styles/AllStyles";
const LoanCalc = () => {
  const [principal, setPrincipal] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(1);
  const [downPayment, setDownPayment] = useState(5000);
  const [emi, setEMI] = useState(0);
  const calculateEMI = () => {
    const principalAmount = parseFloat(principal) - parseFloat(downPayment);
    const interestRatePercent = parseFloat(interestRate) / 100 / 12;
    const tenureMonths = parseFloat(tenure) * 12;
    if (principalAmount && interestRatePercent && tenureMonths) {
      const emiAmount =
        (principalAmount *
          interestRatePercent *
          Math.pow(1 + interestRatePercent, tenureMonths)) /
        (Math.pow(1 + interestRatePercent, tenureMonths) - 1);
      setEMI(emiAmount.toFixed(2));
    }
  };
  return (
    <EmiCalculatorStyled>
      <div className="emicard">
        <h2>Payment Calculator</h2>
        <div className="emi-input">
          <label>Principal Amount:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className="emi-input">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className="emi-input">
          <label>Tenure (in years):</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>
        <div className="emi-input">
          <label>Down Payment:</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
        <button onClick={calculateEMI}>Calculate EMI</button>
        {emi > 0 && <div className="emi-result">Your monthly EMI: {emi}</div>}
      </div>
    </EmiCalculatorStyled>
  );
};
export default LoanCalc;
