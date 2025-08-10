// src/pages/PersonalDetails/PersonalDetails.jsx
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomProgressBar from "../../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../../shared/CustomForm";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../../shared/CustomCard/CustomCard";
import ROUTES from "../../../../routes";
import professionJSON from "../../../../JSON/professionJSON";
import FormDynamicInputFields from "../../../../shared/CustomForm/FormDynamicInputFields";
import { useForm } from "react-hook-form";

const ProfessionalDetails = () => {
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

  const TypeOfEmployment = JSON.parse(
    sessionStorage.getItem("professionalDetails-1")
  );

  const employmentTypeKey = TypeOfEmployment?.employmentType;
  const matchedProfessionFields = professionJSON[employmentTypeKey] || [];

  // Step-based form configs
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
            description:
              "If you work independently (doctor, lawyer, freelancer).",
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
    ],
    2: matchedProfessionFields,
  };

  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
    "Confirmation",
  ];
  const config = formConfigs[stepNum];

  const onSubmit = (data) => {
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
      `professionalDetails-${stepNum}`,
      JSON.stringify(filteredData)
    );

    if (stepNum === 1) {
      navigate(ROUTES.professionalDetails.replace(":step", 2), {
        replace: true,
      });
    } else {
      navigate(ROUTES.confirmation);
    }
  };

  const backBtn = () => {
    if (stepNum === 1)
      navigate(ROUTES.requirementDetails.replace(":step", 2), {
        replace: true,
      });
    else
      navigate(ROUTES.professionalDetails.replace(":step", 1), {
        replace: true,
      });
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

  // Prefill values when component mounts or step changes
  useEffect(() => {
    const storedStep1 = JSON.parse(
      sessionStorage.getItem("professionalDetails-1")
    );
    const storedStep2 = JSON.parse(
      sessionStorage.getItem("professionalDetails-2")
    );

    if (storedStep1 && stepNum === 1) setValueHandler(storedStep1);
    if (storedStep2 && stepNum === 2) setValueHandler(storedStep2);
  }, [stepNum, setValue]);

  return (
    <div className="max-w-md mx-auto p-2 mt-10">
      <CustomProgressBar steps={steps} currentStep={stepNum === 1 ? 3 : 3.6} />
      <CustomCard>
        <h2 className="text-blue-600 my-5 text-3xl font-bold">
          {stepNum === 1
            ? " Your Profession Matters!"
            : "Let’s Make It Happen!"}
        </h2>
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

export default ProfessionalDetails;
