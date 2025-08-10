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
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            isClearable
            {...field}
            options={options}
            isDisabled={isDisabled}
            placeholder={placeholder}
            menuPosition="fixed"
            styles={{
              ...customStyles,
              menuPortal: (base) => ({ ...base, zIndex: 9999 }), // keep it above everything
            }}
            menuPortalTarget={document.body} // render menu in body
            onChange={(selected) => field.onChange(selected)}
            value={options.find((opt) => {
              // Handle both object and primitive value cases
              if (typeof field.value === "object") {
                return opt.value === field.value?.value;
              }
              return opt.value === field.value;
            })}
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
