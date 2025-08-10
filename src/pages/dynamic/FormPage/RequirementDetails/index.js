// src/pages/PersonalDetails/PersonalDetails.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CustomProgressBar from "../../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../../shared/CustomForm";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../../routes";
import AmountRangeSection from "../../../../Modals/AmountRangeSection/AmountRangeSection";
import FormDynamicInputFields from "../../../../shared/CustomForm/FormDynamicInputFields";
import requirementJSON from "../../../../JSON/requirementJSON";

const RequirementDetails = () => {
  const {
    register,
    control,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onChange", mode: "onChange" });

  const navigate = useNavigate();
  const { step } = useParams(); // Get step from route param
  const stepNum = parseInt(step, 10);
  const [amountFetched, setAmountFetched] = useState();

  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
    "Confirmation",
  ];
  const config = requirementJSON[stepNum];

  console.log("step useParams ", step);

  console.log("stepNum ", stepNum);

  console.log("config ", stepNum, config);

  const onSubmit = (data) => {
    data.selectedAmount = amountFetched;
    console.log(`Step ${stepNum} Data:`, data);

  if(amountFetched) sessionStorage.setItem("loan-amount", JSON.stringify(amountFetched));

    // Get only the fields for the current step
    const allowedKeys = requirementJSON[stepNum].map((field) => field.variable);
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
      navigate(ROUTES.requirementDetails.replace(":step", 2), {
        replace: true,
      });
    } else {
      console.log("Submitted Data:", data);
      navigate(ROUTES.professionalDetails.replace(":step", 1), {
        replace: true,
      });
    }
  };

  const backBtn = () => {
    if (stepNum === 1) navigate(ROUTES.personalDetails.replace(":step", 2));
    else
      navigate(ROUTES.requirementDetails.replace(":step", 1), {
        replace: true,
      });
  };

  const handleAmount = (amt) => {
    console.log(" Selected Amount ===> ", amt);
    setAmountFetched(amt);
  };

  const setValueHandler = (storedStep) => {
    Object.entries(storedStep).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null && "value" in value) {
        // For react-select fields that store objects
        setValue(key, value);
      } else {
        // For regular fields
        setValue(key, value);
      }
    });
  };

  useEffect(() => {
    const storedStep1 = JSON.parse(sessionStorage.getItem("requirementDetails-1"));
    const storedStep2 = JSON.parse(sessionStorage.getItem("requirementDetails-2"));

    if (storedStep1 && stepNum === 1) setValueHandler(storedStep1);
    if (storedStep2 && stepNum === 2) setValueHandler(storedStep2);
    
  }, [stepNum, setValue]);

  return (
    <div className="max-w-md mx-auto p-2 mt-10">
      <CustomProgressBar
        steps={steps}
        currentStep={stepNum === 1 ? 2.1 : 2.4}
      />
      <CustomCard>
        <h2 className="text-blue-600 my-2 text-3xl font-bold">
          {stepNum === 1
            ? "Select Your Desired Product"
            : "Select Loan Amount (₹)"}
        </h2>
        {stepNum === 2 && (
          <div className="p-1 mb-4">
            <AmountRangeSection
              minAmount={50000}
              maxAmount={1000000}
              setRsAmount={handleAmount}
            />
          </div>
        )}
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <div className="form-details">
            {config.map((field) => (
              <div className="mb-3">
                <FormDynamicInputFields
                  key={field.id}
                  field={field}
                  register={register}
                  error={errors[field.variable]}
                  control={control}
                  setValue={setValue}
                  getValues={getValues}
                  watch={watch}
                  errors={errors}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3 flex-wrap mt-4 w-full">
            <CustomButton
              hover="hover:bg-blue-700"
              rounded="rounded-full"
              onClick={backBtn}
              title="Back"
            />
            <CustomButton
              type="submit"
              hover="hover:bg-blue-700"
              rounded="rounded-full"
              title="Next"
            />
          </div>
        </CustomForm>
      </CustomCard>
    </div>
  );
};

export default RequirementDetails;
