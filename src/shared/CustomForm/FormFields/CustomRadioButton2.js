import React from "react";
import { useController } from "react-hook-form";

const CustomRadioButton2 = ({
  control,
  name,
  label,
  description,
  options,
  isDisabled,
  rules,
  errors,
}) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    rules,
  });

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
              <input
                type="radio"
                value={option.value}
                checked={isSelected}
                onChange={() => onChange(option.value)}
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
