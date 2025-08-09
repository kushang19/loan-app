import React from "react";
import FormTextField from "./FormFields/FormTextField";
import FormDateField from "./FormFields/FormDateField";
import FormMobileField from "./FormFields/FormMobileField";
import FormEmailField from "./FormFields/FormEmailField";
import CustomSelect from "./FormFields/CustomSelect";
import CustomRadioButton from "./FormFields/CustomRadioButton";
import CustomRadioButton2 from "./FormFields/CustomRadioButton2";
import CustomCheckbox from "./FormFields/CustomCheckbox";
import CustomCardButton from "./FormFields/CustomCardButton";

const FormDynamicInputFields = ({
  field,
  register,
  error,
  setValue,
  getValues,
  control,
  watch,
  errors,
}) => {
  
  switch (field.type) {
    case "textField":
      return <FormTextField field={field} error={error} control={control} />;
    case "dateField":
      return <FormDateField field={field} register={register} error={error} />;
    case "mobileField":
      return <FormMobileField field={field} register={register} error={error} />;
    case "emailField":
      return <FormEmailField field={field} register={register} error={error} />;
    case "reactSelect":
      return (
        <CustomSelect
          control={control}
          name={field.variable}
          label={field.title}
          placeholder={field.placeholder}
          options={field.options}
          isDisabled={field.isDisable}
          rules={
            field.validations?.isRequired
              ? {
                  required:
                    field.validations?.isRequiredError ||
                    "This field is required",
                }
              : {}
          }
          errors={errors}
        />
      );
    case "radioButton":
      return (
        <CustomRadioButton
          control={control}
          name={field.variable}
          label={field.title}
          description={field.description}
          options={field.options}
          isDisabled={field.isDisable}
          rules={
            field.validations?.isRequired
              ? {
                  required:
                    field.validations?.isRequiredError ||
                    "This field is required",
                }
              : {}
          }
          errors={errors}
        />
      );
    case "radioButtonCard":
      return (
        <CustomRadioButton2
          control={control}
          name={field.variable}
          label={field.title}
          description={field.description}
          options={field.options}
          isDisabled={field.isDisable}
          rules={
            field.validations?.isRequired
              ? {
                  required:
                    field.validations?.isRequiredError ||
                    "This field is required",
                }
              : {}
          }
          errors={errors}
        />
      );
    case "cardButton":
      return (
        <CustomCardButton
          control={control}
          name={field.variable}
          label={field.title}
          description={field.description}
          options={field.options}
          isDisabled={field.isDisable}
          rules={
            field.validations?.isRequired
              ? {
                  required:
                    field.validations?.isRequiredError ||
                    "This field is required",
                }
              : {}
          }
          errors={errors}
        />
      );

    case "checkbox":
      return (
        <CustomCheckbox
          control={control}
          name={field.variable}
          label={field.title}
          isDisabled={field.isDisable}
          rules={
            field.validations?.isRequired
              ? {
                  required:
                    field.validations?.isRequiredError ||
                    "This field is required",
                }
              : {}
          }
          errors={errors}
        />
      );

    default:
      return null;
  }
};

export default FormDynamicInputFields;
