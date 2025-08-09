export const isValidMobileNumber = (number) => {
  if (!number || !number.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) return false;

  return true;
};

export const isValidPhoneNumber = (phoneNumber) => {
  let isValid = true;

  let reg1 = /^(6|7|8|9)[0-9]{9}$/; //check if 10 digits and if starts with 6,7,8,9

  let reg2 = /1{9}|2{9}|3{9}|4{9}|5{9}|6{9}|7{9}|8{9}|9{9}|0{9}/; // check if 9 consequtive digits are same

  if (!RegExp(reg1).test(phoneNumber)) isValid = false;

  if (RegExp(reg2).test(phoneNumber)) isValid = false;

  return isValid;
};

export const validateEmail = (email = "") => {
  return Boolean(
    String(email)
      .toLowerCase()

      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

export const isEmptyObject = (obj = {}) => {
  return Boolean(
    obj &&
      Object.keys(obj).length === 0 &&
      Object.getPrototypeOf(obj) === Object.prototype
  );
};

// export const validateAddress = (address = "") => {

// return Boolean(

// String(address)

// .toLowerCase()

// .match(/^[0-9a-zA-Z \_\-\.\,\/\(\)]{2,250}$/)

// );

// };

export const isValidName = (
  name,

  allowNumeric = true,

  allowSpecialChar = true,

  allowFirstSpecialChar = false
) => {
  const numericRegex = /\d/;

  const notAllowedSpecialCharRegex = /[!$^*()|~=`{}[\]:/;<>?,#]/g;

  const specialCharsRegex = /[-!$%^&*()_+|~=`{}[\]:/;<>?,.@#]/g;

  if (!name?.trim()) return false;

  if (!allowNumeric && numericRegex.test(name)) {
    return false;
  }

  if (allowSpecialChar) {
    if (notAllowedSpecialCharRegex.test(name)) return false;

    if (!allowFirstSpecialChar && specialCharsRegex.test(name[0])) return false;
  } else {
    if (specialCharsRegex.test(name)) return false;
  }

  return true;
};

// export const dateFormatter = (params) => {

// return moment(params).format("DD-MM-YYYY");

// };

export const dateFormatterInput = (str) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);

  return [date.getFullYear(), mnth, day].join("-");
};

export const isAlphanumeric = (input) =>
  /^[a-zA-Z0-9]+$/.test(input) || "Must be alphanumeric";

export const isBetweenRange = (value, maxLimit, minLimit) => {
  if (!isNaN(value)) {
    const currentValue = Number(value || "0");

    const maxValue = Number(maxLimit || "0");

    const minValue = Number(minLimit || "0");

    if (currentValue >= minValue && currentValue <= maxValue) {
      return true;
    } else {
      return `Value should be between ${minLimit} and ${maxLimit}`;
    }
  } else {
    return "Must be a number";
  }
};

export const isDateValid = (value, maxYearDifference = 1) => {
  const currentDate = new Date();

  const enteredDate = new Date(value);

  if (isNaN(enteredDate.getTime())) {
    return "Please enter a valid date";
  }

  if (enteredDate < currentDate) {
    return "Please enter a date that is not in the past";
  }

  const maxDate = new Date();

  maxDate.setFullYear(currentDate.getFullYear() + maxYearDifference);

  if (enteredDate > maxDate) {
    return `Please enter a date within ${maxYearDifference} year(s) from the current date`;
  }

  return true;
};

export const isValidateOnlyName = (name) => {
  return /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name) ? true : "Invalid name format";
};

export const isCheckboxChecked = (value) => {
  return value === 1 ? true : "Checkbox must be checked";
};

export const isDropdownSelected = (selectedOption) => {
  return selectedOption !== null && selectedOption !== undefined
    ? true
    : "Please select an option from the dropdown";
};

//to remove double quote from API Side in key value

export const cleanText = (text) => {
  return text.replace(/"/g, "");
};