import React from "react";
import { Controller } from "react-hook-form";

const FormTextField = ({ field, error, control }) => {
  const validation = {};

  if (field.validations?.isRequired) {
    validation.required = field.validations?.isRequiredError || "Required";
  }

  if (field.validations?.regex) {
    validation.pattern = {
      value: new RegExp(field.validations.regex.replace(/^\/|\/$/g, "")),
      message: field.validations.regexError || "Invalid format",
    };
  }

  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{field.title}</label>

      <Controller
        name={field.variable}
        control={control}
        rules={validation}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <input
            type="text"
            placeholder={field.placeholder}
            disabled={field.isDisable}
            onChange={onChange}
            onBlur={onBlur}
            value={value || ""}
            ref={ref}
            className={`p-2 border rounded shadow ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}
      />

      {error && (
        <span className="text-red-500 text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
};

export default FormTextField;
