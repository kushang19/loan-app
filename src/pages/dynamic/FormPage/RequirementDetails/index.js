// src/pages/PersonalDetails/PersonalDetails.jsx
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomProgressBar from "../../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../../shared/CustomForm";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../../routes";
import homeloan from "../../../../assets/images/homeloan.jpg";
import carloan from "../../../../assets/images/carloan.avif";
import businessloan from "../../../../assets/images/BusinessLoan.jpg";
import goldloan from "../../../../assets/images/Gold_Loan.jpg";
import personalloan from "../../../../assets/images/Personal_loan.avif";
import creditcard from "../../../../assets/images/credit-card.webp";
import AmountRangeSection from "../../../../Modals/AmountRangeSection/AmountRangeSection";

// Step-based form configs
const formConfigs = {
  1: [
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
          description:
            "Get instant personal loans with minimal documentation and fast approvals.",
        },
        {
          label: "Credit Card",
          value: "credit-card",
          image: creditcard,
          description:
            "Choose the best credit cards with exclusive rewards, offers, and benefits.",
        },
        {
          label: "Home Loan",
          value: "home-loan",
          image: homeloan,
          description:
            "Explore our platform and discover financial solutions tailored to you",
        },
        {
          label: "Business Loan",
          value: "business-loan",
          image: businessloan,
          description:
            "Empower your business with flexible and hassle-free funding options.",
        },
        {
          label: "Car Loan",
          value: "car-loan",
          image: carloan,
          description:
            "Drive your dream car with our easy and affordable car loan plans.",
        },
        {
          label: "Gold Loan",
          value: "gold-loan",
          image: goldloan,
          description:
            "Unlock the value of your gold with secure and quick gold loans.",
        },
      ],
      validations: {
        isRequired: true,
        isRequiredError: "Please select a card option",
      },
    },
  ],
  2: [
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
  ],
};

const RequirementDetails = () => {
  const navigate = useNavigate();
  const { step } = useParams(); // Get step from route param
  const stepNum = parseInt(step, 10);
  const [amountFetched, setAmountFetched] = useState();

  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];
  const config = formConfigs[stepNum];

  const handleFormSubmit = (data) => {
    console.log(`Step ${stepNum} Data:`, data);

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
      `requirementDetails-${stepNum}`,
      JSON.stringify(filteredData)
    );

    if (stepNum === 1) {
      navigate(ROUTES.requirementDetails.replace(":step", 2));
    } else {
      data.selectedAmount = amountFetched;
      console.log("Submitted Data:", data);
      navigate(ROUTES.professionalDetails.replace(":step", 1));
    }
  };

  const backBtn = () => {
    if (stepNum === 1) navigate(ROUTES.personalDetails.replace(":step", 2));
    else navigate(ROUTES.requirementDetails.replace(":step", 1));
  };

  const handleAmount = (amt) => {
    console.log(" Selected Amount ===> ", amt);
    setAmountFetched(amt);
  };

  return (
    <div className="max-w-md mx-auto p-2 mt-10">
      <CustomProgressBar steps={steps} currentStep={2} />
      <CustomCard>
        <h2 className="text-blue-600 my-5 text-2xl font-bold">
          {stepNum === 1
            ? "Select Your Desired Product"
            : "Select Loan Amount (₹)"}
        </h2>
        {stepNum === 2 && (
          <div className="p-4">
            <AmountRangeSection
              minAmount={50000}
              maxAmount={1000000}
              setRsAmount={handleAmount}
            />
          </div>
        )}
        <CustomForm
          config={config}
          onSubmit={handleFormSubmit}
          storageKey={`requirementDetails-${stepNum}`}
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

export default RequirementDetails;
