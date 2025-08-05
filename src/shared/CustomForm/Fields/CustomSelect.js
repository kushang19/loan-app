// components/form/CustomSelect.js
import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

const CustomSelect = ({
  control,
  name,
  label,
  placeholder,
  options,
  isDisabled,
  rules,
  errors,
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? "0 0 0 1px #2684FF" : "0 0 0 1px #ccc",
      borderColor: state.isFocused ? "#2684FF" : "#ccc",
      "&:hover": {
        borderColor: "#2684FF",
      },
    }),
  };

  return (
    <div className="form-group mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            // isMulti
            isClearable
            {...field}
            options={options}
            isDisabled={isDisabled}
            placeholder={placeholder}
            styles={customStyles}
            onChange={(selected) => field.onChange(selected)}
            value={options.find((opt) => opt.value === field.value)}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;
