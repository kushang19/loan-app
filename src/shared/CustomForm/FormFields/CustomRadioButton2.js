import React from "react";
import { useController } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CustomRadioButton2 = ({
  control,
  name,
  label,
  description,
  options,
  isDisabled,
  rules,
  errors,
  stepNum,
  onCardSelect,
}) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    rules,
  });

  const navigate = useNavigate();

  const handleSelect = (option) => {
    // Update form state
    onChange(option.value);

    // Merge into professionalDetails in sessionStorage
    const stored =
      JSON.parse(sessionStorage.getItem("professionalDetails")) || {};
    stored[name] = option;
    sessionStorage.setItem("professionalDetails", JSON.stringify(stored));

    // Auto-navigate if step 1
    if (stepNum === 1) {
      navigate(`/professional-details/2`, { replace: true });
    }
  };

  return (
    <div className="form-group mb-6">
      {label && (
        <label className="block mb-2 text-base font-semibold text-gray-800">
          {label}
        </label>
      )}
      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}

      <div className="space-y-4">
        {options?.map((option) => {
          const isSelected = value === option.value;

          return (
            <label
              key={option.value}
              className={`block p-4 border rounded-xl cursor-pointer shadow-sm transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-300 bg-white hover:border-blue-400"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {option.label}
                  </p>
                  {option.description && (
                    <p className="text-xs text-gray-500 mt-1">
                      {option.description}
                    </p>
                  )}
                </div>
                <div className="ml-2">
                  <span
                    className={`w-5 h-5 inline-block rounded-full border-2 ${
                      isSelected
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-400"
                    }`}
                  >
                    {isSelected && (
                      <span className="block w-2.5 h-2.5 m-0.5 rounded-full bg-white"></span>
                    )}
                  </span>
                </div>
              </div>
              {/* <input
                type="radio"
                value={option.value}
                checked={isSelected}
                // onChange={() => onChange(option.value)}
                onClick={() => {
                onChange(option.value);
                if (onCardSelect && stepNum === 1) {
                  onCardSelect(option); // ✅ navigate
                }
              }}
                disabled={isDisabled}
                className="hidden"
              /> */}
              <input
                type="radio"
                value={option.value}
                checked={isSelected}
                onChange={() => {
                  onChange(option.value); // update form state
                  if (onCardSelect && stepNum === 1) {
                    onCardSelect(option); // navigate if needed
                  }
                }}
                disabled={isDisabled}
                className="hidden"
              />
            </label>
          );
        })}
      </div>

      {errors[name] && (
        <p className="text-red-500 text-sm mt-2">
          {errors[name]?.message || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default CustomRadioButton2;
