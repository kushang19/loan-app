import React from "react";
import TextField from "./Fields/TextField";
import DateField from "./Fields/DateField";
import MobileField from "./Fields/MobileField";
import EmailField from "./Fields/EmailField";
import CustomSelect from "./Fields/CustomSelect";
import CustomRadioButton from "./Fields/CustomRadioButton";
import CustomRadioButton2 from "./Fields/CustomRadioButton2";
import CustomCheckbox from "./Fields/CustomCheckbox";
import CustomCardButton from "./Fields/CustomCardButton";

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
      return <TextField field={field} register={register} error={error} />;
    case "dateField":
      return <DateField field={field} register={register} error={error} />;
    case "mobileField":
      return <MobileField field={field} register={register} error={error} />;
    case "emailField":
      return <EmailField field={field} register={register} error={error} />;
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
