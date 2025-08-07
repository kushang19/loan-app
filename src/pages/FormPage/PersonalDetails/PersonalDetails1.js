import React from "react";
import { useNavigate } from "react-router-dom";
import CustomProgressBar from "../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../routes";

const personalDetails1 = [
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
  // {
  //   id: 3,
  //   title: "Date of Birth",
  //   placeholder: "Enter DOB",
  //   variable: "dob",
  //   type: "dateField",
  //   isDisable: false,
  //   validations: {
  //     isRequired: true,
  //     isRequiredError: "DOB Field is Required",
  //     regex: "",
  //     regexError: "Invalid date format",
  //   },
  // },
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
];

const PersonalDetails1 = () => {
  const navigate = useNavigate();
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];

  const prevBtn = () => {
    navigate(ROUTES.home);
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    sessionStorage.setItem("personalDetails-1", JSON.stringify(data));
    navigate(ROUTES.personalDetails2);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-2 mt-10">
        <CustomCard>
          <CustomProgressBar steps={steps} currentStep={1}  />
          <h2
            className="text-blue-600"
            style={{ margin: "20px 0", fontSize: "25px", fontWeight: "bold" }}
          >
            Your Loan Journey Begins Here!
          </h2>
          <CustomForm config={personalDetails1} onSubmit={handleFormSubmit}>
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

export default PersonalDetails1;
