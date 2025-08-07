import React from "react";
import { useNavigate } from "react-router-dom";
import CustomProgressBar from "../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../routes";
import professionJSON from "../../../JSON/professionJSON";

const ProfessionalDetails2 = () => {
  const navigate = useNavigate();
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];

  const TypeOfEmployment = JSON.parse(
    sessionStorage.getItem("professionalDetails-1")
  );
  const employmentTypeKey = TypeOfEmployment?.employmentType;
  const matchedProfessionFields = professionJSON[employmentTypeKey] || [];

  const prevBtn = () => {
    navigate(ROUTES.professionalDetails1);
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    sessionStorage.setItem("professionalDetails-2", JSON.stringify(data));
    navigate(ROUTES.confirmation);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-2 mt-10">
        <CustomCard>
          <CustomProgressBar steps={steps} currentStep={3} />
          <h2
            className="text-blue-600"
            style={{ margin: "20px 0", fontSize: "25px", fontWeight: "bold" }}
          >
            Let’s Make It Happen!
          </h2>
          <CustomForm
            config={matchedProfessionFields}
            onSubmit={handleFormSubmit}
          >
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

export default ProfessionalDetails2;
