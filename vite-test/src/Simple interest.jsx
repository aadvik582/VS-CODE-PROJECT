import React, { useState } from "react";

function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (!isNaN(P) && !isNaN(R) && !isNaN(T)) {
      const SI = (P * R * T) / 100;
      const total = P + SI;
      setInterest(SI.toFixed(2));
      setTotalAmount(total.toFixed(2));
    } else {
      setInterest("Please enter valid numbers");
      setTotalAmount(null);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", fontFamily: "Arial" }}>
      <h2>Simple Interest Calculator</h2>
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
      <button onClick={calculateInterest} style={{ margin: "10px 0", padding: "10px", width: "100%" }}>
        Calculate
      </button>

      {interest !== null && !isNaN(interest) && (
        <>
          <h3>Simple Interest: ₹ {interest}</h3>
          <h3>Total Amount to Pay: ₹ {totalAmount}</h3>
        </>
      )}
      {typeof interest === "string" && isNaN(interest) && (
        <p style={{ color: "red" }}>{interest}</p>
      )}
    </div>
  );
}

export default SimpleInterestCalculator;