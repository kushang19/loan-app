import React, { useState, useEffect } from "react";

const AmountRangeModal = ({ isOpen, onClose, minAmount = 50000, maxAmount = 1000000 }) => {
  const [amount, setAmount] = useState(minAmount);
  const [inputValue, setInputValue] = useState(minAmount);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const formatAmount = (amt) => amt.toLocaleString("en-IN");

  const handleSliderChange = (e) => {
    const val = parseInt(e.target.value);
    setAmount(val);
    setInputValue(val);
    setError("");
    setConfirmed(false);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value.replace(/,/g, ""));
    if (isNaN(val)) {
      setInputValue("");
      setError("Please enter a valid number");
      return;
    }
    setInputValue(val);
    setConfirmed(false);

    if (val < minAmount || val > maxAmount) {
      setError(`Please enter an amount between ₹${formatAmount(minAmount)} and ₹${formatAmount(maxAmount)}`);
    } else {
      setAmount(val);
      setError("");
    }
  };

  const handleConfirm = () => {
    if (inputValue < minAmount || inputValue > maxAmount) {
      setError(`Please enter an amount between ₹${formatAmount(minAmount)} and ₹${formatAmount(maxAmount)}`);
      return;
    }

    setAmount(inputValue);
    setConfirmed(true);
    setError("");
    console.log("Confirmed Amount:", inputValue);
  };

  if (!isOpen) return null;

  const percentageFilled = ((amount - minAmount) / (maxAmount - minAmount)) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full animate-fade-in-up">
        {!confirmed ? (
          <>
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
              <input
                type="text"
                value={inputValue.toLocaleString("en-IN")}
                onChange={handleInputChange}
                className="w-32 border rounded px-2 py-1 text-right"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Min ₹{formatAmount(minAmount)}</span>
              <span>Max ₹{maxAmount >= 100000 ? `₹${maxAmount / 100000} L` : formatAmount(maxAmount)}</span>
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-2 mb-4">
                {error}
              </div>
            )}

            <button
              onClick={handleConfirm}
              className="w-full mt-4 bg-yellow-400 text-black font-medium py-2 rounded hover:bg-yellow-500 transition"
            >
              Confirm Amount
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Loan Calculator Summary</h2>
            <div className="relative w-40 h-40 mx-auto mb-4">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  className="text-gray-200"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  className="text-yellow-400"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${percentageFilled}, 100`}
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

            <button
              onClick={onClose}
              className="mt-4 text-sm text-blue-600 underline hover:text-blue-800"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmountRangeModal;
