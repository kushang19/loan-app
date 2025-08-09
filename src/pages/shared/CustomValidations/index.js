import RegexParser from "regex-parser";
import { isBetweenRange } from "../../../helpers/validationHelpers";
import { isNumber } from "../../../helpers/commonValue";

export const CustomValidations = (
  value = "",
  validations = {},
  inputType = "text"
) => {
  // Handle empty values for required fields
  if (validations?.isRequired && !value?.toString().trim()) {
    return validations?.isRequiredError || "This field is required*";
  }

  // Handle regex validations
  if (validations?.regex) {
    try {
      const regex = typeof validations.regex === "string" 
        ? RegexParser(validations.regex) 
        : validations.regex;
      
      const stringValue = value?.toString() || "";
      
      if (!regex.test(stringValue)) {
        return validations?.error || "Please enter valid data in field*";
      }
    } catch (error) {
      console.error("Regex validation error:", error);
      return "Invalid validation pattern";
    }
  }

  // Handle specific input types
  switch (inputType) {
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return validations?.error || "Please enter a valid email address*";
      }
      break;
      
    case "phoneNumber":
      const phoneRegex = /^[\d\+\-\(\)\s]{10,15}$/;
      if (!phoneRegex.test(value)) {
        return validations?.error || "Please enter a valid phone number*";
      }
      break;
  }

  // Handle capitalized validation
  if (validations?.isCapitalized) {
    if (value !== value?.toUpperCase()) {
      return validations?.error || "Must be all uppercase letters*";
    }
  }

  // Handle number range validation
  if (validations?.isNumberRange) {
    const rangeResult = isBetweenRange(
      value,
      validations?.maxNumberLimit,
      validations?.minNumberLimit
    );
    if (rangeResult !== true) {
      return rangeResult || "Value out of acceptable range*";
    }
  }

  // Handle alphanumeric validation
  if (validations?.isAlphanumeric) {
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    if (!alphanumericRegex.test(value)) {
      return validations?.error || "Must contain both letters and numbers*";
    }
  }

  // Handle number validation
  if (validations?.isNumber) {
    if (!isNumber(value)) {
      return validations?.error || "Must be a valid number*";
    }
  }

  // If all validations pass
  return true;
};