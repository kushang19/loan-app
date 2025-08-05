import React from "react";
import { useController } from "react-hook-form";

const CustomCheckbox = ({
  control,
  name,
  label,
  isDisabled,
  rules,
  errors,
}) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className="form-group mb-4">
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={value || false}
          onChange={(e) => onChange(e.target.checked)}
          disabled={isDisabled}
          className="form-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="text-gray-800 text-sm">{label}</span>
      </label>

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default CustomCheckbox;
