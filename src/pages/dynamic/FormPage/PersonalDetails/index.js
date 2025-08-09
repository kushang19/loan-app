// src/pages/PersonalDetails/PersonalDetails.jsx
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ROUTES from "../../../../routes";
import CustomProgressBar from "../../../../shared/CustomForm/FormFields/CustomProgressBar";
import CustomForm from "../../../../shared/CustomForm";
import CustomButton from "../../../../shared/CustomButton/CustomButton";
import CustomCard from "../../../../shared/CustomCard/CustomCard";
import personalDetailsJSON from "../../../../JSON/personalJSON";
import FormDynamicInputFields from "../../../../shared/CustomForm/FormDynamicInputFields";

const PersonalDetails = () => {
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
  const config = personalDetailsJSON[stepNum];

  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
  ];

  console.log("step useParams ", step);
  console.log("stepNum ", stepNum);
  console.log("config ", stepNum, config);

  const onSubmit = (data) => {
    // Get only the fields for the current step
    const allowedKeys = personalDetailsJSON[stepNum].map(
      (field) => field.variable
    );
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
      setValue("firstName", "");
      navigate(ROUTES.personalDetails.replace(":step", 2), { replace: true });
    } else {
      navigate(ROUTES.requirementDetails.replace(":step", 1), {
        replace: true,
      });
    }
  };

  const backBtn = () => {
    if (stepNum === 1) navigate(ROUTES.home);
    else
      navigate(ROUTES.personalDetails.replace(":step", 1), { replace: true });
  };

  // Prefill values when component mounts or step changes
  useEffect(() => {
    const storedStep1 = JSON.parse(sessionStorage.getItem("personalDetails-1"));
    const storedStep2 = JSON.parse(sessionStorage.getItem("personalDetails-2"));

    if (storedStep1 && stepNum === 1) {
      Object.entries(storedStep1).forEach(([key, value]) => {
        if (typeof value === "object" && value !== null && "value" in value) {
          // For react-select fields that store objects
          setValue(key, value);
        } else {
          // For regular fields
          setValue(key, value);
        }
      });
    }

    if (storedStep2 && stepNum === 2) {
      Object.entries(storedStep2).forEach(([key, value]) => {
        if (typeof value === "object" && value !== null && "value" in value) {
          // For react-select fields that store objects
          setValue(key, value);
        } else {
          // For regular fields
          setValue(key, value);
        }
      });
    }
  }, [stepNum, setValue]);

  return (
    <div className="max-w-md mx-auto p-2 mt-10">
      <CustomProgressBar
        steps={steps}
        currentStep={stepNum === 1 ? 1.2 : 1.6}
      />
      <CustomCard>
        <h2 className="text-blue-600 my-5 text-3xl font-bold">
          {stepNum === 1
            ? "Your Loan Journey Begins Here!"
            : "Let’s Keep It Going!"}
        </h2>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <div className="form-details">
            {config.map((field) => (
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

export default PersonalDetails;
