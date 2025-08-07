import React from "react";
import CustomProgressBar from "../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomCard from "../../shared/CustomCard/CustomCard";
import CustomForm from "../../shared/CustomForm";
import CustomButton from "../../shared/CustomButton/CustomButton";

const personalDetails = [
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

const FormPage = () => {
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
    "Confirmation",
  ];

  const goBack = () => {
    console.log("I was clicked");
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    sessionStorage.setItem('personalDetails-1', JSON.stringify(data));

  };

  return (
    <>
      <div className="max-w-md mx-auto p-2 mt-10">

        <CustomCard>
        <CustomProgressBar steps={steps} currentStep={1} onBack={goBack} />
          <h2 style={{margin: "20px 0", fontSize: '25px', fontWeight: "bold"}}>Your Loan Journey Begins Here!</h2>
          <CustomForm config={personalDetails} onSubmit={handleFormSubmit}>
            <CustomButton
              type="submit"
              bgColor="bg-black"
              textColor="text-white"
            >
              Next
            </CustomButton>
          </CustomForm>
        </CustomCard>
      </div>
    </>
  );
};

export default FormPage;
