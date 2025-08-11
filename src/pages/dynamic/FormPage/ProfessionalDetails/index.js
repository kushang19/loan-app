import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CustomProgressBar from "../../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../../shared/CustomForm";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../../routes";
import FormDynamicInputFields from "../../../../shared/CustomForm/FormDynamicInputFields";
import professionJSON from "../../../../JSON/professionJSON";

const ProfessionalDetails = () => {
  const {
    register,
    control,
    setValue,
    getValues,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ reValidateMode: "onChange", mode: "onChange" });

  const navigate = useNavigate();
  const { step } = useParams();
  const stepNum = parseInt(step, 10);

  // Load session storage data
  const storedData = JSON.parse(sessionStorage.getItem("professionalDetails"));
  const employmentTypeKey = storedData?.employmentType;
  const matchedProfessionFields = professionJSON[employmentTypeKey] || [];

  const formConfigs = {
    1: [
      {
        id: 1,
        title: "Select Your Employment Type",
        description: "Choose one that best describes your work.",
        variable: "employmentType",
        type: "radioButtonCard",
        isDisable: false,
        options: [
          { label: "Salaried", value: "salaried", description: "If you receive a fixed monthly income." },
          { label: "Self-Employed Business", value: "self_business", description: "If you own and run a business." },
          { label: "Self-Employed Professional", value: "self_professional", description: "If you work independently (doctor, lawyer, freelancer)." },
          { label: "Student", value: "student", description: "If you are still studying and not earning." },
        ],
        validations: {
          isRequired: true,
          isRequiredError: "Please select your employment type.",
        },
      },
    ],
    2: matchedProfessionFields,
  };

  const config = formConfigs[stepNum];
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
    "Confirmation",
  ];

  // Load stored data into form on mount
  useEffect(() => {
    if (storedData) {
      Object.entries(storedData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue, stepNum]);

  // Whenever employmentType changes → reset all other fields
  const handleCardSelect = (selected) => {
    const newEmploymentType = selected?.value;

    // Reset form in UI immediately
    reset({ employmentType: newEmploymentType });

    // Reset storage
    sessionStorage.setItem(
      "professionalDetails",
      JSON.stringify({ employmentType: newEmploymentType })
    );

    navigate(ROUTES.professionalDetails.replace(":step", 2), { replace: true });
  };

  const onSubmit = (data) => {
    sessionStorage.setItem("professionalDetails", JSON.stringify(data));
    navigate(ROUTES.confirmation.replace(":step", 1), { replace: true });
  };

  const backBtn = () => {
    if (stepNum === 1) {
      navigate(ROUTES.requirementDetails.replace(":step", 2), { replace: true });
    } else {
      navigate(ROUTES.professionalDetails.replace(":step", 1), { replace: true });
    }
  };

  return (
    <div className="max-w-md mx-auto p-2 mt-10">
      <CustomProgressBar steps={steps} currentStep={stepNum === 1 ? 3.1 : 3.4} />
      <CustomCard>
        <h2 className="text-blue-600 my-2 text-3xl font-bold">
          {stepNum === 1
            ? "Select Your Employment Type"
            : "Provide Your Professional Details"}
        </h2>

        {/* Step 1 */}
        {stepNum === 1 && (
          <CustomForm>
            {config?.map((field) => (
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
                  stepNum={stepNum}
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

        {/* Step 2 */}
        {stepNum === 2 && (
          <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <div className="form-details">
              {config?.map((field) => (
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

export default ProfessionalDetails;
