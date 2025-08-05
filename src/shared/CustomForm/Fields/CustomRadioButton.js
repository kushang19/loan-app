import React from "react";
import { useController } from "react-hook-form";

const CustomRadioButton = ({
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
    <div className="form-group mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      {description && (
        <p className="text-xs text-gray-500 mb-2">{description}</p>
      )}
      <div className="flex flex-wrap gap-4">
        {options?.map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              disabled={isDisabled}
              className="accent-blue-500 cursor-pointer"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default CustomRadioButton;
