import React from "react";
import { Route, useNavigate } from "react-router-dom";
import CustomProgressBar from "../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../routes";

const personalDetails2 = [
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
    title: "I acknowledge that my information is secure & will comply with the Terms & Conditions and Privacy Policy.",
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
    title: "By clicking on proceed, you agree to the Loan App Credit Report Terms of Use, Terms & Conditions and Privacy Policy.",
    variable: "termsAcceptedPD2",
    type: "checkbox",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "You must accept the terms to continue",
    },
  },
];

const PersonalDetails2 = () => {
  const navigate = useNavigate();
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];

  const prevBtn = () => {
    navigate(ROUTES.personalDetails1);
  };

  const goBack = () => {};

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    sessionStorage.setItem("personalDetails-2", JSON.stringify(data));
    navigate(ROUTES.requirementDetails1)
  };

  return (
    <>
      <div className="max-w-md mx-auto p-2 mt-10">
        <CustomCard>
          <CustomProgressBar steps={steps} currentStep={1} onBack={goBack} />
          <h2
            className="text-blue-600"
            style={{ margin: "20px 0", fontSize: "25px", fontWeight: "bold" }}
          >
            Let’s Keep It Going!
          </h2>
          <CustomForm config={personalDetails2} onSubmit={handleFormSubmit}>
            <div className="flex justify-end gap-3 flex-wrap mt-4 w-full">
              <CustomButton
                hover="hover:bg-blue-700"
                rounded="rounded-full"
                onClick={prevBtn}
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
    </>
  );
};

export default PersonalDetails2;
