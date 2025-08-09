// src/pages/PersonalDetails/PersonalDetails.jsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomProgressBar from "../../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../../shared/CustomForm";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../../routes";
import { useForm } from "react-hook-form";
import personalDetailsJSON from "../../../../JSON/personalDetailsJSON"

const PersonalDetails = () => {

  const navigate = useNavigate();
  const { step } = useParams(); // Get step from route param
  const stepNum = parseInt(step, 10);

  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];
  const config = personalDetailsJSON[stepNum];

  const handleFormSubmit = (data) => {
    
    // Get only the fields for the current step
    const allowedKeys = personalDetailsJSON[stepNum].map((field) => field.variable);
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
