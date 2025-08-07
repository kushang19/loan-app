import React from "react";

const CustomProgressBar = ({ steps, currentStep, onBack }) => {
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full mt-5 mb-5">
      {/* Back Button */}
      {/* {currentStep > 1 && (
        <button
          onClick={onBack}
          className="mb-4 text-blue-600 font-medium"
        >
          &lt; Back
        </button>
      )} */}

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Steps */}
      <div className="flex justify-between text-xs text-gray-600 font-medium">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-center w-full ${
              index + 1 === currentStep ? "text-blue-600 font-semibold" : ""
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomProgressBar;
