// import React from 'react';
// import PropTypes from 'prop-types';

// // import FormDateInput from '../FormDateInput';
// // import FormMonthAndYear from '../FormMonthAndYear';
// // import FormDropDown from "../FormDropDown";
// // import FormPhoneNumberField from '../FormPhoneNumberField';
// // import FormRadioButtonGroup from '../FormRadioButtonGroup';
// // import FormTextFieldWithDropdown from '../FormTextFieldWithDropdown';
// // import FormUploadFile from '../FormUploadFile';
// // import FormOTPInput from '../FormOTPInput';
// // import FormReactSelect from '../FormReactSelect';
// // import FormSwitch from '../FormSwitch';
// // import FormTextFieldMultiLine from '../FormTextFieldMultiLine';

// import FormTextField from '../FormTextField';

// const FormReusableDynamicInputLists = ({
//   control,
//   register,
//   errors,
//   setValue,
//   getValues,
//   getFieldState,
//   DocumentType,
//   variableName = '',
//   label = '',
//   placeholder = '',
//   selectedInputDetails = null,
//   containerClass = 'col-12 col-lg-6 py-2',
//   fullContainerClass = 'col-12 col-lg-12 py-2',
//   validations = {},
//   digitNumber = 6,
//   isEditClicked,
//   fileName,
//   isMulti,
//   onClickOrChangeItem = () => {},
//   onSelectDate = () => {},
//   onSelectUploadFile = () => {},
//   onChangeTextField = () => {},
//   manualDateSelectedList = [],
//   onEnterClick = () => {},
//   labelNameStyle = {},
// }) => {
//   const inputFieldType = (selectedType) => {
//      if (
//       selectedType === 'textField'
//       || selectedType === 'password'
//       || selectedType === 'email'
//     ) {
//       return (
//         <FormTextField
//           labelNameStyle={labelNameStyle}
//           inputType={
//             // eslint-disable-next-line no-nested-ternary
//             selectedInputDetails?.type === 'password'
//               ? 'password'
//               : selectedInputDetails?.type === 'email'
//                 ? 'email'
//                 : 'text'
//           }
//           validations={validations}
//           control={control}
//           setValue={setValue}
//           register={register}
//           errors={errors}
//           // errorKeysList={errorKeysList}
//           variableName={variableName}
//           label={
//             label
//             || (variableName === 'docUIDNo'
//               ? `${DocumentType}` || 'Enter Document/UID No'
//               : selectedInputDetails?.title)
//           }
//           value={selectedInputDetails?.value}
//           placeholder={
//             placeholder
//             || (variableName === 'docUIDNo'
//               ? `Enter ${DocumentType}`
//               : selectedInputDetails?.placeholder)
//           }
//           belowText={selectedInputDetails?.note}
//           isDisabled={selectedInputDetails?.isDisabled}
//           onChangeTextField={onChangeTextField}
//           onEnterClick={onEnterClick}
//         />
//       );
//     }

//   };

//   return (
//     <div
//       className={
//         selectedInputDetails?.type === 'uploadFile'
//           ? fullContainerClass
//           : containerClass
//       }
//     >
//       {inputFieldType(selectedInputDetails?.type)}
//     </div>
//   );
// };

// /* eslint-disable react/forbid-prop-types */
// FormReusableDynamicInputLists.propTypes = {
//   control: PropTypes.node.isRequired,
//   register: PropTypes.node.isRequired,
//   errors: PropTypes.object,
//   setValue: PropTypes.node.isRequired,
//   getValues: PropTypes.node.isRequired,
//   getFieldState: PropTypes.node.isRequired,
//   DocumentType: PropTypes.string,
//   variableName: PropTypes.string,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   selectedInputDetails: PropTypes.object,
//   containerClass: PropTypes.string,
//   fullContainerClass: PropTypes.string,
//   validations: PropTypes.object,
//   digitNumber: PropTypes.number,
//   isEditClicked: PropTypes.bool,
//   fileName: PropTypes.string,
//   onClickOrChangeItem: PropTypes.func,
//   onSelectDate: PropTypes.func,
//   onSelectUploadFile: PropTypes.func,
//   onChangeTextField: PropTypes.func,
//   manualDateSelectedList: PropTypes.array,
//   onEnterClick: PropTypes.func,
//   labelNameStyle: PropTypes.object,
//   isMulti: PropTypes.bool,
// };

// FormReusableDynamicInputLists.defaultProps = {
//   errors: null,
//   DocumentType: '',
//   variableName: '',
//   label: '',
//   placeholder: '',
//   selectedInputDetails: null,
//   containerClass: 'col-12 col-lg-6 py-2',
//   fullContainerClass: 'col-12 col-lg-12 py-2',
//   validations: {},
//   digitNumber: 6,
//   isEditClicked: false,
//   fileName: '',
//   onClickOrChangeItem: () => {},
//   onSelectDate: () => {},
//   onSelectUploadFile: () => {},
//   onChangeTextField: () => {},
//   manualDateSelectedList: [],
//   onEnterClick: () => {},
//   labelNameStyle: {},
//   isMulti: false,
// };

// export default FormReusableDynamicInputLists;

import React from "react";

// import FormDateInput from "../FormDateInput";

// import FormDropDown from "../FormDropDown";

// import FormPhoneNumberField from "../FormPhoneNumberField";

// import FormRadioButtonGroup from "../FormRadioButtonGroup";

// import FormTextFieldWithDropdown from "../FormTextFieldWithDropdown";

// import FormUploadFile from "../FormUploadFile";

// import FormOTPInput from "../FormOTPInput";

// import FormReactSelect from "../FormReactSelect";

// import FormMonthAndYear from "../FormMonthAndYear";

// import FormSwitch from "../FormSwitch";

import FormTextField from "../FormTextField";

const FormReusableDynamicInputLists = ({
  show,

  control,

  register,

  errors,

  setValue,

  getValues,

  getFieldState,

  DocumentType,

  variableName = "",

  label = "",

  placeholder = "",

  selectedInputDetails = null,

  containerClass = "col-12 col-lg-6 py-2",

  fullContainerClass = "col-12 col-lg-12 py-2",

  validations = {},

  digitNumber = 6,

  isEditClicked,

  fileName,

  onClickOrChangeItem = () => {},

  onSelectDate = () => {},

  onSelectUploadFile = () => {},

  onChangeTextField = () => {},

  manualDateSelectedList = [],

  onEnterClick = () => {},

  labelNameStyle = {},
}) => {
  const cityOptions =
    getValues(`${variableName}Options`) || selectedInputDetails?.options || [];

  return (
    <div
      className={
        selectedInputDetails?.type === "uploadFile"
          ? fullContainerClass
          : containerClass
      }
    >
      {
        selectedInputDetails?.type === "textField" ||
          selectedInputDetails?.type === "password" ||
          (selectedInputDetails?.type === "email" && (
            <FormTextField
              labelNameStyle={labelNameStyle}
              inputType={
                selectedInputDetails?.type === "password"
                  ? "password"
                  : selectedInputDetails?.type === "email"
                  ? "email"
                  : "text"
              }
              validations={validations}
              control={control}
              setValue={setValue}
              register={register}
              errors={errors}
              // errorKeysList={errorKeysList}

              variableName={variableName}
              label={
                label
                  ? label
                  : selectedInputDetails?.placeholder ===
                    "Enter Document/UID No"
                  ? `${DocumentType}` || "Enter Document/UID No"
                  : selectedInputDetails?.title
              }
              value={selectedInputDetails?.value}
              placeholder={
                placeholder
                  ? placeholder
                  : selectedInputDetails?.placeholder ===
                    "Enter Document/UID No"
                  ? `Enter ${DocumentType}`
                  : selectedInputDetails?.placeholder
              }
              belowText={selectedInputDetails?.note}
              isDisabled={selectedInputDetails?.isDisabled}
              onChangeTextField={onChangeTextField}
              onEnterClick={onEnterClick}
            />
          ))
        // :
        // selectedInputDetails?.type === "dropdown" ||
        //   selectedInputDetails?.type === "reactSelect" ? (
        //   <FormReactSelect
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     control={control}
        //     setValue={setValue}
        //     register={register}
        //     errors={errors}
        //     variableName={variableName}
        //     isDisabled={selectedInputDetails?.isDisabled}
        //     label={selectedInputDetails?.title}
        //     placeholder={selectedInputDetails?.placeholder}
        //     belowText={selectedInputDetails?.note}
        //     options={cityOptions}
        //     onClickOrChangeItem={onClickOrChangeItem}
        //     display={show}
        //   />
        // ) : selectedInputDetails?.type === "dateField" ? (
        //   <FormDateInput
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     control={control}
        //     getValues={getValues}
        //     setValue={setValue}
        //     errors={errors}
        //     variableName={variableName}
        //     icon={selectedInputDetails?.icon}
        //     label={selectedInputDetails?.title}
        //     placeholder={selectedInputDetails?.placeholder}
        //     belowText={selectedInputDetails?.note}
        //     manualDateSelectedList={manualDateSelectedList}
        //     onSelectDate={onSelectDate}
        //   />
        // ) : selectedInputDetails?.type === "monthField" ||
        //   selectedInputDetails?.type === "yearField" ||
        //   selectedInputDetails?.type === "monthAndYearField" ? (
        //   <FormMonthAndYear
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     showMonthOnly={selectedInputDetails?.type === "monthField"}
        //     showYearOnly={selectedInputDetails?.type === "yearField"}
        //     showMonthAndYear={selectedInputDetails?.type === "monthAndYearField"}
        //     control={control}
        //     getValues={getValues}
        //     setValue={setValue}
        //     errors={errors}
        //     variableName={variableName}
        //     icon={selectedInputDetails?.icon}
        //     label={selectedInputDetails?.title}
        //     placeholder={selectedInputDetails?.placeholder}
        //     belowText={selectedInputDetails?.note}
        //     manualDateSelectedList={manualDateSelectedList}
        //     onSelectDate={onSelectDate}
        //   />
        // ) : selectedInputDetails?.type === "textFieldWithDropdown" ? (
        //   <FormTextFieldWithDropdown
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     control={control}
        //     setValue={setValue}
        //     register={register}
        //     errors={errors}
        //     variableName={variableName}
        //     isDisabled={selectedInputDetails?.isDisabled}
        //     label={selectedInputDetails?.title}
        //     placeholder={selectedInputDetails?.placeholder}
        //     belowText={selectedInputDetails?.note}
        //     value={selectedInputDetails?.value}
        //     optionsList={selectedInputDetails?.options}
        //   />
        // ) : selectedInputDetails?.type === "mobileNumber" ? (
        //   <FormPhoneNumberField
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     control={control}
        //     setValue={setValue}
        //     register={register}
        //     errors={errors}
        //     getValues={getValues}
        //     getFieldState={getFieldState}
        //     variableName={variableName}
        //     isDisabled={selectedInputDetails?.isDisabled}
        //     readOnly={selectedInputDetails?.readOnly}
        //     label={selectedInputDetails?.title}
        //     belowText={selectedInputDetails?.note}
        //     placeholder={selectedInputDetails?.placeholder}
        //   />
        // ) : selectedInputDetails?.type === "radioButton" ? (
        //   <FormRadioButtonGroup
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     control={control}
        //     register={register}
        //     errors={errors}
        //     getValues={getValues}
        //     setValue={setValue}
        //     getFieldState={getFieldState}
        //     variableName={variableName}
        //     label={selectedInputDetails?.title}
        //     isDisabled={selectedInputDetails?.isDisabled}
        //     options={selectedInputDetails?.options || []}
        //   />
        // ) : selectedInputDetails?.type === "uploadFile" ? (
        //   <FormUploadFile
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     control={control}
        //     register={register}
        //     errors={errors}
        //     getValues={getValues}
        //     isEditClicked={isEditClicked}
        //     setValue={setValue}
        //     getFieldState={getFieldState}
        //     variableName={variableName}
        //     label={selectedInputDetails?.title}
        //     isDisabled={selectedInputDetails?.isDisabled}
        //     options={selectedInputDetails?.options || []}
        //     onSelectUploadFile={onSelectUploadFile}
        //     fileName={fileName}
        //   />
        // ) : selectedInputDetails?.type === "otp" ? (
        //   <FormOTPInput
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     control={control}
        //     setValue={setValue}
        //     register={register}
        //     errors={errors}
        //     getValues={getValues}
        //     getFieldState={getFieldState}
        //     variableName={variableName}
        //     digitNumber={digitNumber}
        //     label={selectedInputDetails?.title}
        //     isDisabled={selectedInputDetails?.isDisabled}
        //     options={selectedInputDetails?.options || []}
        //     onChange={(value) => {
        //       console.log("OTP Value:", value); // Debugging: Log the OTP value

        //       onClickOrChangeItem(value); // Pass the OTP value to the parent component
        //     }}
        //   />
        // ) : selectedInputDetails?.type === "switch" ? (
        //   <FormSwitch
        //     labelNameStyle={labelNameStyle}
        //     validations={validations}
        //     control={control}
        //     setValue={setValue}
        //     register={register}
        //     errors={errors}
        //     getValues={getValues}
        //     getFieldState={getFieldState}
        //     variableName={variableName}
        //     digitNumber={digitNumber}
        //     label={selectedInputDetails?.title}
        //     isToggle={selectedInputDetails?.isChecked}
        //     isDisabled={selectedInputDetails?.isDisabled}
        //     options={selectedInputDetails?.options || []}
        //   />
        // ) : (
        //   <div />
        // )
      }
    </div>
  );
};

export default FormReusableDynamicInputLists;
