import React, { useState } from "react";
import { postData, generateOtp, verifyOtp, getData } from "./api";

export default function LoanForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    // ... other fields
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const saved = await postData(formData);
      console.log("Saved to DB:", saved);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerateOtp = async () => {
    const otpData = await generateOtp();
    console.log("Generated OTP:", otpData);
  };

  const handleVerifyOtp = async () => {
    const userOtp = prompt("Enter OTP:");
    const verifyResult = await verifyOtp(userOtp);
    console.log(verifyResult);
  };

  const handleGetAllData = async () => {
    const data = await getData();
    console.log("All data from DB:", data);
  };

  return (
    <div>
      <h1>Loan Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        {/* Add other fields here */}
        <button type="submit">Submit Form</button>
      </form>

      <hr />

      <button onClick={handleGenerateOtp}>Generate OTP</button>
      <button onClick={handleVerifyOtp}>Verify OTP</button>
      <button onClick={handleGetAllData}>Get All Data</button>
    </div>
  );
}
