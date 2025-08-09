const personalJSON = {
  1: [
    {
      id: 1,
      title: "First Name",
      placeholder: "Enter first name",
      variable: "firstName",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "First Name is Required",
        regex: "",
        regexError: "Please enter your first name ",
      },
    },
    {
      id: 2,
      title: "Last Name",
      placeholder: "Enter last name",
      variable: "lastName",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "Last Name is Required",
        regex: "",
        regexError: "Please enter your last name",
      },
    },
    {
      id: 3,
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
  ],
  2: [
    {
      id: 1,
      title: "Enter Your PAN Number",
      placeholder: "XXXXX1901X",
      variable: "panNumber",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "Pan Number is Required",
        regex: "",
        regexError: "Please enter your Pan Number ",
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
        regex: "",
        regexError: "Invalid date format",
      },
    },
    {
      id: 3,
      title: "Select Gender",
      description: "",
      placeholder: "Select Gender",
      variable: "gender",
      type: "radioButton",
      isDisable: false,
      options: [
        { id: 1, label: "Male", value: "male" },
        { id: 2, label: "Female", value: "female" },
        { id: 3, label: "Other", value: "other" },
      ],
      validations: {
        isRequired: true,
        isRequiredError: "Gender is required",
        regex: "",
        regexError: "",
      },
    },
    {
      id: 4,
      title: "Enter PIN CODE",
      placeholder: "400102",
      variable: "pincode",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "PIN Code is Required",
        regex: "",
        regexError: "Please enter your PIN Code ",
      },
    },
    {
      id: 5,
      title:
        "I acknowledge that my information is secure & will comply with the Terms & Conditions and Privacy Policy.",
      variable: "termsAcceptedPD1",
      type: "checkbox",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "You must accept the terms to continue",
      },
    },
    {
      id: 6,
      title:
        "By clicking on proceed, you agree to the Loan App Credit Report Terms of Use, Terms & Conditions and Privacy Policy.",
      variable: "termsAcceptedPD2",
      type: "checkbox",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "You must accept the terms to continue",
      },
    },
  ],
};

export default personalJSON;