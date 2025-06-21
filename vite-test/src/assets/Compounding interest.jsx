import React, { useState } from "react";
function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState(1);
  const [compoundInterest, setCompoundInterest] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);
    const N = parseInt(frequency);

    if (!isNaN(P) && !isNaN(R) && !isNaN(T) && !isNaN(N)) {
      const A = P * Math.pow((1 + R / (100 * N)), N * T);
      const CI = A - P;
      setCompoundInterest(CI.toFixed(2));
      setTotalAmount(A.toFixed(2));
    } else {
      setCompoundInterest("Please enter valid numbers");
      setTotalAmount(null);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", fontFamily: "Arial" }}>
      <h2>Compound Interest Calculator</h2>
      <input
        type="number"
        placeholder="Principal (P)"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        style={{ margin: "5px", width: "100%", padding: "8px" }}
      />
      <input
        type="number"
        placeholder="Rate of Interest (R)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        style={{ margin: "5px", width: "100%", padding: "8px" }}
      />
      <input
        type="number"
        placeholder="Time in Years (T)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={{ margin: "5px", width: "100%", padding: "8px" }}
      />
      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        style={{ margin: "5px", width: "100%", padding: "8px" }}
      >
        <option value="1">Yearly (1)</option>
        <option value="4">Quarterly (4)</option>
        <option value="12">Monthly (12)</option>
        <option value="365">Daily (365)</option>
      </select>
      <button onClick={calculateCompoundInterest} style={{ margin: "10px 0", padding: "10px", width: "100%" }}>
        Calculate
      </button>

      {compoundInterest !== null && !isNaN(compoundInterest) && (
        <>
          <h3>Compound Interest: ₹ {compoundInterest}</h3>
          <h3>Total Amount to Pay: ₹ {totalAmount}</h3>
        </>
      )}
      {typeof compoundInterest === "string" && isNaN(compoundInterest) && (
        <p style={{ color: "red" }}>{compoundInterest}</p>
      )}
    </div>
  );
}

export default CompoundInterestCalculator;
