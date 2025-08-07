import React from "react";
import { useController } from "react-hook-form";

const CustomCardButton = ({
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {options?.map((option) => {
          const isSelected = value === option.value;

          return (
            <div
              key={option.value}
              onClick={() => onChange(option.value)}
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
