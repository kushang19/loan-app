import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const { step } = useParams();
  const stepNum = parseInt(step, 10);
  const [amountFetched, setAmountFetched] = useState();

  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
    "Confirmation",
  ];
  const config = requirementJSON[stepNum];

  // 🟢 Load stored data if available
  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem("requirementDetails"));
    if (stored) {
      Object.entries(stored).forEach(([key, value]) => {
        setValue(key, value);
      });
      if (stored.selectedAmount) setAmountFetched(stored.selectedAmount);
    }
  }, [setValue]);

  const handleAmount = (amt) => {
    setAmountFetched(amt);
  };

  // 🟢 Step 1 card selection handler
  const handleCardSelect = (selected) => {
    const stored =
      JSON.parse(sessionStorage.getItem("requirementDetails")) || {};
    const updated = { ...stored, cardChoice: selected };
    sessionStorage.setItem("requirementDetails", JSON.stringify(updated));
    navigate(ROUTES.requirementDetails.replace(":step", 2), { replace: true });
  };

  // 🟢 Form submit (Step 2)
  const onSubmit = (data) => {
    const stored =
      JSON.parse(sessionStorage.getItem("requirementDetails")) || {};
    const updated = { ...stored, ...data, selectedAmount: amountFetched };
    sessionStorage.setItem("requirementDetails", JSON.stringify(updated));

    navigate(ROUTES.professionalDetails.replace(":step", 1), {
      replace: true,
    });
  };

  const backBtn = () => {
    if(stepNum === 1) navigate(ROUTES.personalDetails.replace(":step", 2), { replace: true });
    else navigate(ROUTES.requirementDetails.replace(":step", 1), { replace: true });
  };

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

        {/* Step 2 amount range */}
        {stepNum === 2 && (
          <div className="p-1 mb-4">
            <AmountRangeSection
              minAmount={50000}
              maxAmount={1000000}
              setRsAmount={handleAmount}
            />
          </div>
        )}

        {/* Step 1 → only cards, click to select */}
        {stepNum === 1 && (
          <CustomForm>
            {config.map((field) => (
              <div key={field.id} className="mb-3">
                <FormDynamicInputFields
                  field={field}
                  register={register}
                  error={errors[field.variable]}
                  control={control}
                  setValue={setValue}
                  getValues={getValues}
                  watch={watch}
                  errors={errors}
                  stepNum={stepNum} // ✅ added
                  onCardSelect={handleCardSelect}
                />
              </div>
            ))}
            <div className="flex justify-end gap-3 flex-wrap mt-4 w-full">
              <CustomButton
                hover="hover:bg-blue-700"
                rounded="rounded-full"
                onClick={backBtn}
                title="Back"
              />
            </div>
          </CustomForm>
        )}

        {/* Step 2 → show form + buttons */}
        {stepNum === 2 && (
          <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <div className="form-details">
              {config.map((field) => (
                <div key={field.id} className="mb-3">
                  <FormDynamicInputFields
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
        )}
      </CustomCard>
    </div>
  );
};

export default RequirementDetails;
