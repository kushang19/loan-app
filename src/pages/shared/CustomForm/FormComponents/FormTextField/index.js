// import React, { useState } from 'react';
// import { Controller } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message';
// import * as dynamicValidator from 'quantique-field-validator';
// import PropTypes from 'prop-types';
// import RegexParser from 'regex-parser';
// import HideIcon from '../../../../assets/icons/hide password icon.svg';
// import ViewIcon from '../../../../assets/icons/show password icon.svg';
// import theme from '../../../../constants/theme';
// import './customTextField.scss';

// const FormTextField = ({
//   inputType,
//   control,
//   variableName,
//   errors,
//   label = '',
//   placeholder = '',
//   belowText = '',
//   mainContainerClass = '',
//   mainContainerStyle = {},
//   validations = {},
//   isDisabled = false,
//   onChangeTextField = () => {},
//   onEnterClick = () => {},
//   labelNameStyle = {},
// }) => {
//   const errorKeysList = errors ? Object.keys(errors) : [];
//   const [isShowPassword, setIsShowPassword] = useState(false);

//   function handleKeyDown(event) {
//     if (event?.keyCode === 13) {
//       onEnterClick();
//     }
//   }

//   const handleOnViewHideIcon = () => {
//     setIsShowPassword(!isShowPassword);
//   };

//   const callForValidate = (selectValue) => {
//     const regex = validations?.regex ? RegexParser(validations?.regex) : '';
//     const validator = dynamicValidator(selectValue, validations.fieldType, {
//       ...validations,
//       type: 'user',
//       regex,
//     });

//     if (validator?.isValid) {
//       return true;
//     }

//     return validator.error;
//   };

//   return (
//     <div className={mainContainerClass} style={mainContainerStyle}>
//       {label && (
//         <div
//           className="textFieldLabelContainer ms-2 "
//           style={{ fontFamily: theme?.pf || 'Roboto-Regular' }}
//         >
//           <span
//             className="textFieldLabel"
//             style={
//               validations?.isRequired
//                 ? { ...labelNameStyle }
//                 : { paddingBottom: 4, ...labelNameStyle }
//             }
//           >
//             {label || ''}
//           </span>
//           {validations?.isRequired && (
//             <span className="starSymbol mx-1">*</span>
//           )}
//         </div>
//       )}
//       {inputType === 'password' ? (
//         <div className="input-group input-group-lg customInputGroup">
//           <Controller
//             name={variableName}
//             control={control}
//             rules={{
//               required: {
//                 value: validations?.isRequired,
//                 message:
//                   validations?.isRequiredError
//                   || 'This field is required to be filled*',
//               },
//               maxLength: {
//                 value: validations?.maxLength,
//                 message:
//                   validations?.maxLengthError
//                   || `Max ${validations?.maxLength || ''} characters allowed`,
//               },
//               minLength: {
//                 value: validations?.minLength,
//                 message:
//                   validations?.minLengthError
//                   || `Min ${validations?.minLength || ''} characters allowed`,
//               },
//               validate: { callForValidate },
//             }}
//             render={({ field }) => (
//               <div
//                 className={
//                   (errorKeysList || [])?.includes(variableName)
//                     ? 'form-control custom-text-input-password col-12 d-flex'
//                     : 'form-control text-input-password-container  col-12 d-flex'
//                 }
//               >
//                 <input
//                   disabled={isDisabled}
//                   type={isShowPassword ? 'text' : 'password'}
//                   className="text-input-password col-11"
//                   placeholder={placeholder}
//                   aria-invalid={
//                     (errorKeysList || [])?.includes(variableName)
//                       ? 'true'
//                       : 'false'
//                   }
//                   name={field.name}
//                   value={field.value || ''}
//                   ref={field.ref}
//                   onBlur={field.onBlur}
//                   onChange={(e) => {
//                     let selectedvalue = '';
//                     if (validations?.maxLength) {
//                       if (
//                         e.target.value.length <= Number(validations?.maxLength)
//                       ) {
//                         if (validations?.isUpperCase) {
//                           selectedvalue = e.target.value.toUpperCase();
//                         } else {
//                           selectedvalue = e.target.value;
//                         }
//                         onChangeTextField(selectedvalue, variableName);
//                         field.onChange(selectedvalue);
//                       }
//                     } else {
//                       if (validations?.isUpperCase) {
//                         selectedvalue = e.target.value.toUpperCase();
//                       } else {
//                         selectedvalue = e.target.value;
//                       }
//                       onChangeTextField(variableName, selectedvalue);
//                       field.onChange(selectedvalue);
//                     }
//                   }}
//                   onKeyDown={handleKeyDown}
//                 />
//                 <div
//                   role="button"
//                   tabIndex="0"
//                   className="paaswordIconContainer"
//                   onClick={handleOnViewHideIcon}
//                   onKeyDown={() => {}}
//                 >
//                   <img
//                     src={isShowPassword ? ViewIcon : HideIcon}
//                     alt="showhidepassword"
//                     height={25}
//                     width={25}
//                   />
//                 </div>
//               </div>
//             )}
//           />
//         </div>
//       ) : (
//         <div className="input-group input-group-lg customInputGroup">
//           <Controller
//             name={variableName}
//             control={control}
//             rules={{
//               required: {
//                 value: validations?.isRequired,
//                 message:
//                   validations?.isRequiredError
//                   || 'This field is required to be filled*',
//               },
//               maxLength: {
//                 value: validations?.maxLength,
//                 message:
//                   validations?.maxLengthError
//                   || `Max ${validations?.maxLength || ''} characters allowed`,
//               },
//               minLength: {
//                 value: validations?.minLength,
//                 message:
//                   validations?.minLengthError
//                   || `Min ${validations?.minLength || ''} characters allowed`,
//               },
//               validate: { callForValidate },
//             }}
//             render={({ field }) => (
//               <input
//                 disabled={isDisabled}
//                 type={inputType}
//                 className={
//                   (errorKeysList || [])?.includes(variableName)
//                     ? 'form-control custom-error-textField'
//                     : 'form-control custom-textField'
//                 }
//                 placeholder={placeholder}
//                 aria-invalid={
//                   (errorKeysList || [])?.includes(variableName)
//                     ? 'true'
//                     : 'false'
//                 }
//                 name={field.name}
//                 value={field.value || ''}
//                 ref={field.ref}
//                 onBlur={field.onBlur}
//                 onChange={(e) => {
//                   let selectedvalue = '';
//                   if (validations?.maxLength) {
//                     if (
//                       e.target.value.length <= Number(validations?.maxLength)
//                     ) {
//                       if (validations?.isUpperCase) {
//                         selectedvalue = e.target.value.toUpperCase();
//                       } else {
//                         selectedvalue = e.target.value;
//                       }
//                       onChangeTextField(selectedvalue, variableName);
//                       field.onChange(selectedvalue);
//                     }
//                   } else {
//                     if (validations?.isUpperCase) {
//                       selectedvalue = e.target.value.toUpperCase();
//                     } else {
//                       selectedvalue = e.target.value;
//                     }
//                     onChangeTextField(variableName, selectedvalue);
//                     field.onChange(selectedvalue);
//                   }
//                 }}
//                 onKeyDown={handleKeyDown}
//               />
//             )}
//           />
//         </div>
//       )}
//       <ErrorMessage
//         errors={errors}
//         name={variableName}
//         render={({ message }) => (
//           <div
//             className="errorText"
//             style={{ fontFamily: theme?.pfm || 'Roboto-Medium' }}
//           >
//             {message || 'Please enter valid data in field*'}
//           </div>
//         )}
//       />
//       {belowText && (
//         <div
//           className="belowNoteText"
//           style={{ fontFamily: theme?.pfm || 'Roboto-Medium' }}
//         >
//           {belowText || ''}
//         </div>
//       )}
//     </div>
//   );
// };

// /* eslint-disable react/forbid-prop-types */
// FormTextField.propTypes = {
//   inputType: PropTypes.string,
//   control: PropTypes.node.isRequired,
//   variableName: PropTypes.string.isRequired,
//   errors: PropTypes.object,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   belowText: PropTypes.string,
//   mainContainerClass: PropTypes.string,
//   mainContainerStyle: PropTypes.object,
//   validations: PropTypes.object,
//   isDisabled: PropTypes.bool,
//   onChangeTextField: PropTypes.func,
//   onEnterClick: PropTypes.func,
//   labelNameStyle: PropTypes.object,
// };

// FormTextField.defaultProps = {
//   inputType: 'text',
//   errors: null,
//   label: '',
//   placeholder: '',
//   belowText: '',
//   mainContainerClass: '',
//   mainContainerStyle: {},
//   validations: {},
//   isDisabled: false,
//   onChangeTextField: () => {},
//   onEnterClick: () => {},
//   labelNameStyle: {},
// };

// export default FormTextField;

import React, { useState } from "react";

import { Controller } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";

import { CustomValidations } from "../../../CustomValidations";

// import ViewIcon from "../../../../../assets/icons/show password icon.svg";

// import HideIcon from "../../../../../assets/icons/hide password icon.svg";

import ViewIcon from "../../../../../assets/icons/showEye.png";

import HideIcon from "../../../../../assets/icons/eye-password-hide.svg";

import "./customTextField.css";

const FormTextField = ({
  inputType = "text",

  control,

  register,

  setValue,

  variableName,

  errors,

  // errorKeysList = [],

  label = "",

  value = "",

  placeholder = "",

  belowText = "",

  mainContainerClass = "",

  mainContainerStyle = {},

  validations = {},

  isDisabled = false,

  onChangeTextField = () => {},

  onEnterClick = () => {},

  labelNameStyle = {},
}) => {
  const errorKeysList = errors ? Object.keys(errors) : [];

  const [isShowPassword, setIsShowPassword] = useState(false);

  function handleKeyDown(event) {
    if (event?.keyCode === 13) {
      onEnterClick();
    }
  }

  const handleOnViewHideIcon = () => {
    setIsShowPassword(!isShowPassword);
  };

  const callForValidate = (value) =>
    inputType === "password"
      ? true
      : validations?.isRequired
      ? CustomValidations(value, validations, inputType)
      : value
      ? CustomValidations(value, validations, inputType)
      : true;

  return (
    <div className={mainContainerClass} style={mainContainerStyle}>
      {label && (
        <div
          className="textFieldLabelContainer ms-2 "
          style={{ fontFamily: "Poppins-Regular" }}
        >
          <span
            className="textFieldLabel"
            style={
              validations?.isRequired
                ? { ...labelNameStyle }
                : { paddingBottom: 4, ...labelNameStyle }
            }
          >
            {label || ""}
          </span>

          {validations?.isRequired && (
            <span className="starSymbol mx-1">*</span>
          )}
        </div>
      )}

      {inputType === "password" ? (
        <div className="input-group input-group-lg customInputGroup">
          <Controller
            name={variableName}
            control={control}
            rules={{
              required: {
                value: validations?.isRequired,

                message:
                  validations?.isRequiredError ||
                  "This field is required to be filled*",
              },

              maxLength: {
                value: validations?.maxLength,

                message:
                  validations?.maxLengthError ||
                  `Max ${validations?.maxLength || ""} characters allowed`,
              },

              minLength: {
                value: validations?.minLength,

                message:
                  validations?.minLengthError ||
                  `Min ${validations?.minLength || ""} characters allowed`,
              },

              validate: { callForValidate },
            }}
            render={({ field }) => {
              return (
                <div
                  className={
                    (errorKeysList || [])?.includes(variableName)
                      ? "form-control custom-text-input-password col-12 d-flex"
                      : "form-control text-input-password-container col-12 d-flex"
                  }
                >
                  <input
                    disabled={isDisabled}
                    type={isShowPassword ? "text" : "password"}
                    className="text-input-password col-11"
                    // className={

                    // (errorKeysList || [])?.includes(variableName)

                    // ? "form-control custom-error-textField"

                    // : "form-control custom-textField"

                    // }

                    placeholder={placeholder}
                    aria-invalid={
                      (errorKeysList || [])?.includes(variableName)
                        ? "true"
                        : "false"
                    }
                    {...field}
                    onChange={(e) => {
                      let selectedvalue = "";

                      if (validations?.maxLength) {
                        if (
                          e.target.value.length <=
                          Number(validations?.maxLength)
                        ) {
                          if (validations?.isUpperCase) {
                            selectedvalue = e.target.value.toUpperCase();
                          } else {
                            selectedvalue = e.target.value;
                          }

                          onChangeTextField(selectedvalue, variableName);

                          field.onChange(selectedvalue);
                        }
                      } else {
                        if (validations?.isUpperCase) {
                          selectedvalue = e.target.value.toUpperCase();
                        } else {
                          selectedvalue = e.target.value;
                        }

                        onChangeTextField(variableName, selectedvalue);

                        field.onChange(selectedvalue);
                      }
                    }}
                    onKeyDown={handleKeyDown}
                  />

                  <div
                    className="paaswordIconContainer"
                    onClick={handleOnViewHideIcon}
                  >
                    <img
                      src={isShowPassword ? ViewIcon : HideIcon}
                      alt="showhidepassword"
                      height={25}
                      width={25}
                    />
                  </div>
                </div>
              );
            }}
          />
        </div>
      ) : (
        <div className="input-group input-group-lg customInputGroup">
          <Controller
            name={variableName}
            control={control}
            rules={{
              required: {
                value: validations?.isRequired,

                message:
                  validations?.isRequiredError ||
                  "This field is required to be filled*",
              },

              maxLength: {
                value: validations?.maxLength,

                message:
                  validations?.maxLengthError ||
                  `Max ${validations?.maxLength || ""} characters allowed`,
              },

              minLength: {
                value: validations?.minLength,

                message:
                  validations?.minLengthError ||
                  `Min ${validations?.minLength || ""} characters allowed`,
              },

              validate: { callForValidate },
            }}
            render={({ field }) => {
              return (
                <>
                  {variableName === "mobile" && (
                    <span
                      className="input-group-text input-group-text pre-text"
                      id="basic-addon1"
                    >
                      +971-
                    </span>
                  )}

                  <input
                    disabled={isDisabled}
                    type={inputType}
                    // className={

                    // (errorKeysList || [])?.includes(variableName)

                    // ? "form-control custom-error-textField"

                    // : "form-control custom-textField"

                    // }

                    className={`${
                      (errorKeysList || []).includes(variableName)
                        ? variableName === "mobile"
                          ? "form-control mobile-input-error custom-error-textField"
                          : "form-control custom-error-textField"
                        : variableName === "mobile"
                        ? "form-control mobile-input-field"
                        : "form-control custom-textField"
                    }`}
                    placeholder={placeholder}
                    aria-invalid={
                      (errorKeysList || [])?.includes(variableName)
                        ? "true"
                        : "false"
                    }
                    {...field}
                    onChange={(e) => {
                      let selectedvalue = "";

                      if (validations?.maxLength) {
                        if (
                          e.target.value.length <=
                          Number(validations?.maxLength)
                        ) {
                          if (validations?.isUpperCase) {
                            selectedvalue = e.target.value.toUpperCase();
                          } else {
                            selectedvalue = e.target.value;
                          }

                          onChangeTextField(selectedvalue, variableName);

                          field.onChange(selectedvalue);
                        }
                      } else {
                        if (validations?.isUpperCase) {
                          selectedvalue = e.target.value.toUpperCase();
                        } else {
                          selectedvalue = e.target.value;
                        }

                        onChangeTextField(variableName, selectedvalue);

                        field.onChange(selectedvalue);
                      }
                    }}
                    onKeyDown={handleKeyDown}
                  />
                </>
              );
            }}
          />
        </div>
      )}

      <ErrorMessage
        errors={errors}
        name={variableName}
        render={({ message }) => (
          <div className="errorText" style={{ fontFamily: "Poppins-Medium" }}>
            {message || "Please enter valid data in field*"}
          </div>
        )}
      />

      {belowText && (
        <div className="belowNoteText" style={{ fontFamily: "Poppins-Medium" }}>
          {belowText || ""}
        </div>
      )}
    </div>
  );
};

export default FormTextField;