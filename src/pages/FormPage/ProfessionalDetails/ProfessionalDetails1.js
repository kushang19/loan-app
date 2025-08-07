import React from "react";
import { useNavigate } from "react-router-dom";
import CustomProgressBar from "../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../routes";

const professionalDetails1 = [
    {
    id: 1,
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
];

const ProfessionalDetails1 = () => {
  const navigate = useNavigate();
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];

  const prevBtn = () => {
    navigate(ROUTES.requirementDetails2);
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    sessionStorage.setItem("professionalDetails-1", JSON.stringify(data));
    navigate(ROUTES.professionalDetails2);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-2 mt-10">
        <CustomCard>
          <CustomProgressBar steps={steps} currentStep={3}  />
          <h2
            className="text-blue-600"
            style={{ margin: "20px 0", fontSize: "25px", fontWeight: "bold" }}
          >
            Your Profession Matters!
          </h2>
          <CustomForm config={professionalDetails1} onSubmit={handleFormSubmit}>
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

export default ProfessionalDetails1;

