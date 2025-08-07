import React from "react";
import { useNavigate } from "react-router-dom";
import CustomProgressBar from "../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../routes";

import homeloan from "../../../assets/images/homeloan.jpg";
import carloan from "../../../assets/images/carloan.avif";
import businessloan from "../../../assets/images/BusinessLoan.jpg";
import goldloan from "../../../assets/images/Gold_Loan.jpg";
import personalloan from "../../../assets/images/Personal_loan.avif";
import creditcard from "../../../assets/images/credit-card.webp";

const requirementDetails1 = [
  {
    id: 1,
    title: "Choose a Card Option",
    variable: "cardChoice",
    type: "cardButton",
    isDisable: false,
    options: [
      {
        label: "Personal Loan",
        value: "personal-loan",
        image: personalloan,
        description: "Get instant personal loans with minimal documentation and fast approvals.",
      },
      {
        label: "Credit Card",
        value: "credit-card",
        image: creditcard,
        description: "Choose the best credit cards with exclusive rewards, offers, and benefits.",
      },
      {
        label: "Home Loan",
        value: "home-loan",
        image: homeloan,
        description: "Explore our platform and discover financial solutions tailored to you",
      },
      {
        label: "Business Loan",
        value: "business-loan",
        image: businessloan,
        description: "Empower your business with flexible and hassle-free funding options.",
      },
      {
        label: "Car Loan",
        value: "car-loan",
        image: carloan,
        description: "Drive your dream car with our easy and affordable car loan plans.",
      },
      {
        label: "Gold Loan",
        value: "gold-loan",
        image: goldloan,
        description: "Unlock the value of your gold with secure and quick gold loans.",
      },
    ],
    validations: {
      isRequired: true,
      isRequiredError: "Please select a card option",
    },
  },
];

const RequirementDetails1 = () => {
  const navigate = useNavigate();
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];

  const prevBtn = () => {
    navigate(ROUTES.personalDetails2);
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    sessionStorage.setItem("requirementDetails-1", JSON.stringify(data));
    navigate(ROUTES.requirementDetails2)
  };

  return (
    <>
      <div className="max-w-md mx-auto p-2 mt-10">
        <CustomCard>
          <CustomProgressBar steps={steps} currentStep={2} />
          <h2
            className="text-blue-600"
            style={{ margin: "20px 0", fontSize: "25px", fontWeight: "bold" }}
          >
            Select Your Desired Product
          </h2>
          <CustomForm config={requirementDetails1} onSubmit={handleFormSubmit}>
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

export default RequirementDetails1;
