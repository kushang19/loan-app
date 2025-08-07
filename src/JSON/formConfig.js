import homeloan from "../assets/images/homeloan.jpg";
import carloan from "../assets/images/carloan.avif";
import businessloan from "../assets/images/BusinessLoan.jpg";

export const formConfig = [
  {
    id: 1,
    title: "Full Name",
    placeholder: "Enter your name",
    variable: "fullName",
    type: "textField",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "Name Field is Required",
      regex: "/^[a-zA-Z\u00C0-\u017F'-]+(?:\\s[a-zA-Z\u00C0-\u017F'-]+)+$/",
      regexError: "Please enter your full name (first and last)",
    },
  },
  {
    id: 2,
    title: "Date of Birth",
    placeholder: "Enter DOB",
    variable: "dob",
    type: "dateField",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "DOB Field is Required",
      regex: "/^(\\d{4})-(\\d{2})-(\\d{2})$/",
      regexError: "Invalid date format",
    },
  },
  {
    id: 3,
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
    id: 4,
    title: "Email Address",
    placeholder: "Enter your email",
    variable: "email",
    type: "emailField",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "Email is required",
      regex: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
      regexError: "Enter a valid email address",
    },
  },
  {
    id: 5,
    title: "Select Reason for Your Loan",
    placeholder: "Select Reason",
    variable: "loanReason",
    type: "reactSelect",
    isDisable: false,
    options: [
      { id: 1, label: "Medical Emergency", value: "Medical Emergency" },
      {
        id: 2,
        label: "Wedding or Family Function",
        value: "Wedding or Family Function",
      },
      {
        id: 3,
        label: "Renovate or Repair Home",
        value: "Renovate or Repair Home",
      },
      {
        id: 4,
        label: "Buy a Gadget or Appliance",
        value: "Buy a Gadget or Appliance",
      },
      { id: 5, label: "Travel or Vacation", value: "Travel or Vacation" },
      {
        id: 6,
        label: "Home Buying or Renovation",
        value: "Home Buying or Renovation",
      },
      { id: 7, label: "Education Expenses", value: "Education Expenses" },
      { id: 8, label: "Debt Consolidation", value: "Debt Consolidation" },
      { id: 9, label: "Business Investment", value: "Business Investment" },
      { id: 10, label: "Vehicle Purchase", value: "Vehicle Purchase" },
      { id: 11, label: "Others", value: "Others" },
    ],

    validations: {
      isRequired: true,
      isRequiredError: "Loan Reason is required",
      regex: "",
      regexError: "",
    },
  },
  {
    id: 6,
    title: "Radio Title",
    description: "This is my description which can be optional",
    placeholder: "Enter Radio",
    variable: "radio",
    type: "radioButton",
    isDisable: false,
    options: [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
    ],
    validations: {
      isRequired: true,
      isRequiredError: "Field is required",
      regex: "",
      regexError: "",
    },
  },
  {
    id: 7,
    title: "Select Your Employment Type",
    description: "Choose one that best describes your work.",
    variable: "employmentType",
    type: "radioButtonCard",
    isDisable: false,
    options: [
      {
        label: "Salaried",
        value: "salaried",
        description: "If you receive a fixed monthly income.",
      },
      {
        label: "Self-Employed Business",
        value: "self_business",
        description: "If you own and run a business.",
      },
      {
        label: "Self-Employed Professional",
        value: "self_professional",
        description: "If you work independently (doctor, lawyer, freelancer).",
      },
      {
        label: "Student",
        value: "student",
        description: "If you are still studying and not earning.",
      },
    ],
    validations: {
      isRequired: true,
      isRequiredError: "Please select your employment type.",
    },
  },
  {
    id: 8,
    title: "I agree to the terms and conditions",
    variable: "termsAccepted",
    type: "checkbox",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "You must accept the terms to continue",
    },
  },
  {
    id: 9,
    title: "Choose a Card Option",
    variable: "cardChoice",
    type: "cardButton",
    isDisable: false,
    options: [
      {
        label: "Home Loan",
        value: "home-loan",
        image: homeloan,
        description: "Includes standard benefits and support",
      },
      {
        label: "Business Loan",
        value: "business-loan",
        image: businessloan,
        description: "All-inclusive with premium support",
      },
      {
        label: "Car Loan",
        value: "car-loan",
        image: carloan,
        description: "Includes standard benefits and support",
      },
    ],
    validations: {
      isRequired: true,
      isRequiredError: "Please select a card option",
    },
  },
];
