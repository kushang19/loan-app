// src/pages/PersonalDetails/PersonalDetails.jsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomProgressBar from "../../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../../shared/CustomForm";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../../routes";
import { useForm } from "react-hook-form";

// Step-based form configs
const formConfigs = {
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

const PersonalDetails = () => {

  const navigate = useNavigate();
  const { step } = useParams(); // Get step from route param
  const stepNum = parseInt(step, 10);

  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];
  const config = formConfigs[stepNum];

  const handleFormSubmit = (data) => {
    
    // Get only the fields for the current step
    const allowedKeys = formConfigs[stepNum].map((field) => field.variable);
    const filteredData = Object.keys(data)
    .filter((key) => allowedKeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});
    
    // Store only the current step's keys in sessionStorage
    sessionStorage.setItem(
      `personalDetails-${stepNum}`,
      JSON.stringify(filteredData)
    );
    console.log(`Step ${stepNum} Data:`, filteredData);

    if (stepNum === 1) {
      navigate(ROUTES.personalDetails.replace(":step", 2));
    } else {
      navigate(ROUTES.requirementDetails.replace(":step", 1));
    }
  };

  const backBtn = () => {
    if (stepNum === 1) navigate(ROUTES.home);
    else navigate(ROUTES.personalDetails.replace(":step", 1));
  };

  return (
    <div className="max-w-md mx-auto p-2 mt-10">
      <CustomProgressBar steps={steps} currentStep={1} />
      <CustomCard>
        <h2 className="text-blue-600 my-5 text-2xl font-bold">
          {stepNum === 1
            ? "Your Loan Journey Begins Here!"
            : "Let’s Keep It Going!"}
        </h2>
        <CustomForm
          config={config}
          onSubmit={handleFormSubmit}
          storageKey={`personalDetails-${stepNum}`} // Fixed template literal
        >
          <div className="flex justify-end gap-3 flex-wrap mt-4 w-full">
            <CustomButton
              hover="hover:bg-blue-700"
              rounded="rounded-full"
              onClick={backBtn}
            >
              Back
            </CustomButton>
            <CustomButton
              type="submit"
              hover="hover:bg-blue-700"
              rounded="rounded-full"
            >
              Next
            </CustomButton>
          </div>
        </CustomForm>
      </CustomCard>
    </div>
  );
};

export default PersonalDetails;
