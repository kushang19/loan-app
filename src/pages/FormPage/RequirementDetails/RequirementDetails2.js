import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomProgressBar from "../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../routes";
import AmountRangeSection from "../../../Modals/AmountRangeSection/AmountRangeSection";

const requirementDetails2 = [
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
];

const RequirementDetails2 = () => {
  const navigate = useNavigate();
  const [amountFetched, setAmountFetched] = useState();
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];

  const prevBtn = () => {
    navigate(ROUTES.requirementDetails1);
  };

  const handleAmount = (amt) => {
    console.log(" Selected Amount ===> ", amt);
    setAmountFetched(amt);
  };

  const handleFormSubmit = (data) => {
    data.selectedAmount = amountFetched;
    console.log("Submitted Data:", data);
    sessionStorage.setItem("requirementDetails-2", JSON.stringify(data));
    navigate(ROUTES.professionalDetails1)
  };

  return (
    <>
      <div className="max-w-md mx-auto p-2 mt-10">
        <CustomCard>
          <CustomProgressBar steps={steps} currentStep={2} />
          <h2
            className="text-blue-600"
            style={{ margin: "20px 0 0", fontSize: "25px", fontWeight: "bold" }}
          >
            Select Loan Amount (₹)
          </h2>
          <div className="p-4">
            <AmountRangeSection
              minAmount={50000}
              maxAmount={1000000}
              setRsAmount={handleAmount}
            />
          </div>
          <CustomForm config={requirementDetails2} onSubmit={handleFormSubmit}>
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

export default RequirementDetails2;
