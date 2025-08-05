import React from "react";

const MobileField = ({ field, register, error }) => {
  const validation = {};

  if (field.validations?.isRequired) {
    validation.required = field.validations?.isRequiredError || "Required";
  }

  if (field.validations?.regex) {
    validation.pattern = {
      value: new RegExp(field.validations.regex.replace(/^\/|\/$/g, "")),
      message: field.validations.regexError || "Invalid mobile number",
    };
  }

  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{field.title}</label>
      <input
        type="tel"
        placeholder={field.placeholder}
        disabled={field.isDisable}
        {...register(field.variable, validation)}
        className={`p-2 border rounded shadow ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
};

export default MobileField;
