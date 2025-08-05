import React, { useEffect, useState, useRef } from "react";

const OTPModal = ({ isOpen, onClose, timerSeconds = 120 }) => {
  const [timeLeft, setTimeLeft] = useState(timerSeconds);
  const [showResend, setShowResend] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const correctOTP = "2223"; // Default OTP for now

  useEffect(() => {
    if (!isOpen) return;

    setTimeLeft(timerSeconds);
    setShowResend(false);
    setOtpValues(["", "", "", ""]);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, timerSeconds]);

  const handleResend = () => {
    setTimeLeft(timerSeconds);
    setShowResend(false);
    setOtpValues(["", "", "", ""]);
    inputRefs.current[0]?.focus();
    console.log("Resending OTP...");
  };

  const handleInput = (e, index) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((v) => v !== "")) {
      const enteredOTP = newOtp.join("");
      if (enteredOTP === correctOTP) {
        console.log("Success !!");
        onClose();
      } else {
        setTimeout(() => {
          alert("Incorrect OTP");
          setOtpValues(["", "", "", ""]);
          inputRefs.current[0]?.focus();
        }, 100); // Delay to avoid conflict with focus blur
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otpValues];

      if (newOtp[index]) {
        newOtp[index] = "";
        setOtpValues(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        const updatedOtp = [...otpValues];
        updatedOtp[index - 1] = "";
        setOtpValues(updatedOtp);
      }
    }
  };

  const formatTime = () => {
    const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const secs = String(timeLeft % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center relative animate-fade-in-down">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Enter OTP</h2>
        <p className="text-sm text-gray-500 mb-4">
          We've sent a 4-digit OTP to your number
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {otpValues.map((val, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={val}
              onChange={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          ))}
        </div>

        <div className="mb-4 text-gray-600">
          {showResend ? (
            <button
              onClick={handleResend}
              className="text-blue-600 font-medium hover:underline"
            >
              Resend OTP
            </button>
          ) : (
            <span>
              Resend in <strong>{formatTime()}</strong>
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-2 text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OTPModal;
