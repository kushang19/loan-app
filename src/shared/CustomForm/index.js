import React from "react";
import { useForm } from "react-hook-form";
import FormDynamicInputFields from "./FormDynamicInputFields";

const CustomForm = ({ config, onSubmit, children, storageKey }) => {
  // Load saved step data from sessionStorage
  const savedData = sessionStorage.getItem(storageKey);
  const defaultValues = savedData ? JSON.parse(savedData) : {};

  const {
    handleSubmit,
    register,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
      {children}
    </form>
  );
};

export default CustomForm;
