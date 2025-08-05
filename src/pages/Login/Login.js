import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    // Here you will call backend API to send OTP
    console.log("OTP sent to:", mobile);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Verify OTP via backend
    if (otp === "1234") {
      navigate("/form");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login with Mobile Number</h2>
      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter mobile number"
        className="w-full p-2 mb-4 border rounded"
      />
      {!otpSent ? (
        <button
          onClick={handleSendOtp}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Send OTP
        </button>
      ) : (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full p-2 mt-4 mb-4 border rounded"
          />
          <button
            onClick={handleVerifyOtp}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
