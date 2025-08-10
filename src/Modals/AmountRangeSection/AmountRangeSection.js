import React, { useState, useEffect } from "react";

const AmountRangeSection = ({ minAmount = 50000, maxAmount = 1000000, setRsAmount }) => {
  const [amount, setAmount] = useState(minAmount);
  const [inputValue, setInputValue] = useState(minAmount.toLocaleString("en-IN"));
  const [error, setError] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  const storedLoanAmount = JSON.parse(sessionStorage.getItem("loan-amount"));

  const formatAmount = (amt) => {
    if (isNaN(amt)) return "0";
    return amt.toLocaleString("en-IN");
  };

  // Log amount whenever it changes
  useEffect(() => {
    console.log("Current amount:", amount);
    setRsAmount(amount);
  }, [amount]);

  const handleSliderChange = (e) => {
    const val = parseInt(e.target.value);
    updateAmount(val);
  };

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");
    
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (rawValue === "") {
      setInputValue("");
      setError("Please enter a valid number");
      return;
    }

    if (/^\d+$/.test(rawValue)) {
      const formattedValue = formatAmount(parseInt(rawValue));
      setInputValue(formattedValue);

      const timeout = setTimeout(() => {
        const val = parseInt(rawValue);
        validateAndUpdateAmount(val);
      }, 1000);

      setTypingTimeout(timeout);
    } else {
      setInputValue(e.target.value);
      setError("Please enter a valid number");
    }
  };

  const validateAndUpdateAmount = (val) => {
    if (isNaN(val)) {
      setError("Please enter a valid number");
      return;
    }

    if (val < minAmount || val > maxAmount) {
      setError(
        `Enter between ₹${formatAmount(minAmount)} and ₹${formatAmount(maxAmount)}`
      );
    } else {
      updateAmount(val);
      setError("");
    }
  };

  const updateAmount = (val) => {
    const clampedVal = Math.min(Math.max(val, minAmount), maxAmount);
    setAmount(clampedVal);
    setInputValue(formatAmount(clampedVal));
  };

  // Calculate percentage filled (0 to 100)
  const percentageFilled = ((amount - minAmount) / (maxAmount - minAmount)) * 100;
  
  // Circle properties
  const radius = 15.9155; // This matches your SVG path
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentageFilled / 100) * circumference;

  useEffect(() => {
  if (storedLoanAmount) {
    setAmount(storedLoanAmount);
    setInputValue(formatAmount(storedLoanAmount));
  }
}, []);


  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Required loan amount</h2>

      <div className="flex justify-between items-center gap-4 mb-4">
        <input
          type="range"
          min={minAmount}
          max={maxAmount}
          value={amount}
          onChange={handleSliderChange}
          className="w-full accent-yellow-500"
        />
        <div className="relative">
          <span className="absolute left-2 top-1 text-gray-400 text-sm">₹</span>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-32 border rounded px-6 py-1 text-right"
          />
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Min ₹{formatAmount(minAmount)}</span>
        <span>Max ₹{formatAmount(maxAmount)}</span>
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {!error && (
        <div className="mt-8 flex flex-col items-center justify-center text-center" style={{display: "none"}}>
          <h2 className="text-lg font-semibold mb-2">Loan Calculator Summary</h2>

          <div className="relative w-40 h-40 mx-auto mb-4">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <path
                className="text-gray-200"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={circumference}
              />
              <path
                className="text-yellow-400"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl">💰</span>
              <span className="text-sm text-gray-600 mt-1">Loan</span>
            </div>
          </div>

          <div className="text-sm text-gray-600 flex justify-center items-center gap-2">
            <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
            <span>Loan Amount</span>
            <strong>₹{formatAmount(amount)}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmountRangeSection;