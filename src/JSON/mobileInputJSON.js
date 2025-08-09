export const mobileInput = [
  {
    id: 1,
    title: "Mobile Number",
    placeholder: "Enter mobile number",
    variable: "mobile",
    type: "mobileField",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "Mobile number is required",
      regex: "^\\d{10}$",
      regexError: "Must be a valid 10-digit number",
    },
  },
  {
    id: 2,
    title:
      "I confirm that this is my registered mobile number and authorize Loan App to use it for communications related to my loan application, as per the Terms & Conditions and Privacy Policy.",
    variable: "termsAccepted",
    type: "checkbox",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "You must accept the terms to continue",
    },
  },
];
