import React from "react";
import { useController } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CustomCardButton = ({
  control,
  name,
  label,
  description,
  options,
  isDisabled,
  onCardSelect,
  rules,
  errors,
  stepNum, // pass this in from FormDynamicInputFields
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

    // Merge into requirementDetails in sessionStorage
    const stored =
      JSON.parse(sessionStorage.getItem("requirementDetails")) || {};
    stored[name] = option;
    sessionStorage.setItem("requirementDetails", JSON.stringify(stored));

    // Auto-navigate if step 1
    if (stepNum === 1) {
      navigate(`/requirement-details/2`, { replace: true });
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

      <div className="grid gap-4 grid-cols-2 max-[480px]:grid-cols-1">
        {options?.map((option) => {
          const isSelected = value === option.value;

          return (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                if (onCardSelect && stepNum === 1) {
                  onCardSelect(option); // ✅ navigate
                }
              }}
              className={`p-4 border rounded-xl shadow-sm cursor-pointer transition-all text-center ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-300 bg-white hover:border-blue-400"
              }`}
            >
              {option.image && (
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-30 object-cover rounded-xl mx-auto mb-3"
                />
              )}

              <p className="text-sm font-medium text-gray-800">
                {option.label}
              </p>

              {option.description && (
                <p className="text-xs text-gray-500 mt-1">
                  {option.description}
                </p>
              )}
            </div>
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

export default CustomCardButton;
