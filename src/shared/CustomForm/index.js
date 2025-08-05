import React from "react";
import { useForm } from "react-hook-form";
import FormDynamicInputFields from "./FormDynamicInputFields";

const CustomForm = ({ config, onSubmit, children }) => {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

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
