const yearOptions = Array.from({ length: 50 }, (_, i) => {
  const year = 2025 - i;
  return { id: i + 1, label: year.toString(), value: year.toString() };
});

const professionJSON = {
  salaried: [
    {
      id: 1,
      title: "Enter Bank Name",
      placeholder: "Enter Bank Name",
      variable: "bankName",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "Bank Name is Required",
        regex: "",
        regexError: "Please enter your Bank Name",
      },
    },
    {
      id: 2,
      title: "Please Enter Monthly Salary",
      placeholder: "Enter Monthly Salary",
      variable: "monthlySalary",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "Monthly Salary is Required",
        regex: "",
        regexError: "Please enter your Monthly salary",
      },
    },
    {
      id: 3,
      title: "Total Work Experience",
      placeholder: "Select",
      variable: "totalWorkExperience",
      type: "reactSelect",
      isDisable: false,
      options: [
        { id: 1, label: "0-2 Years", value: "0-2 Years" },
        { id: 2, label: "2-5 Years", value: "2-5 Years" },
        { id: 3, label: "5-10 Years", value: "5-10 Years" },
        { id: 4, label: "10+ Years", value: "10+ Years" },
      ],

      validations: {
        isRequired: true,
        isRequiredError: "Total Work Experience is required",
        regex: "",
        regexError: "",
      },
    },
  ],
  self_business: [
    {
      id: 1,
      title: "Select Your Business Nature",
      placeholder: "Select",
      variable: "businessNature",
      type: "reactSelect",
      isDisable: false,
      options: [
        { id: 1, label: "Trader/wholeseller", value: "Trader/wholeseller" },
        { id: 2, label: "Manufacturer", value: "Manufacturer" },
        { id: 3, label: "Retailer", value: "Retailer" },
        {
          id: 4,
          label: "Service provider & others",
          value: "Service provider & others",
        },
      ],

      validations: {
        isRequired: true,
        isRequiredError: "Field is required",
        regex: "",
        regexError: "",
      },
    },
    {
      id: 2,
      title: "Select Your Business Type",
      placeholder: "Select",
      variable: "businessType",
      type: "reactSelect",
      isDisable: false,
      options: [
        { id: 1, label: "Proprietorship", value: "Proprietorship" },
        { id: 2, label: "Partnership", value: "Partnership" },
        { id: 3, label: "Private Ltd", value: "Private Ltd" },
        { id: 4, label: "LLP", value: "LLP" },
        { id: 5, label: "Limited Company", value: "Limited Company" },
        { id: 6, label: "One Person Company", value: "One Person Company" },
        { id: 7, label: "Not Registered", value: "Not Registered" },
      ],

      validations: {
        isRequired: true,
        isRequiredError: "Field is required",
        regex: "",
        regexError: "",
      },
    },
    {
      id: 3,
      title: "How old is Your Business?",
      placeholder: "Select",
      variable: "businessAge",
      type: "reactSelect",
      isDisable: false,
      options: [
        { id: 1, label: "Less than 1 Year", value: "Less than 1 Year" },
        { id: 2, label: "1-3 Years", value: "1-3 Years" },
        { id: 3, label: "3-5 Years", value: "3-5 Years" },
        { id: 4, label: "5-10 Years", value: "5-10 Years" },
        { id: 5, label: "10+ Years", value: "10+ Years" },
      ],

      validations: {
        isRequired: true,
        isRequiredError: "Field is required",
        regex: "",
        regexError: "",
      },
    },
  ],
  self_professional: [
    {
      id: 1,
      title: "Select Your Profession Type",
      placeholder: "Select",
      variable: "professionType",
      type: "reactSelect",
      isDisable: false,
      options: [
        { id: 1, label: "Engineer", value: "Engineer" },
        { id: 2, label: "Doctor", value: "Doctor" },
        { id: 3, label: "CS", value: "CS" },
        { id: 4, label: "Architect", value: "Architect" },
        { id: 5, label: "CA", value: "CA" },
        {
          id: 6,
          label: "Cost Accountant (ICWA)",
          value: "Cost Accountant (ICWA)",
        },
        { id: 7, label: "Others", value: "Others" },
      ],

      validations: {
        isRequired: true,
        isRequiredError: "Profession Type is required",
        regex: "",
        regexError: "",
      },
    },
    {
      id: 2,
      title: "Select Your Professional Experience",
      placeholder: "Select",
      variable: "professionalExperience",
      type: "reactSelect",
      isDisable: false,
      options: [
        { id: 1, label: "0-2 Years", value: "0-2 Years" },
        { id: 2, label: "2-5 Years", value: "2-5 Years" },
        { id: 3, label: "5-10 Years", value: "5-10 Years" },
        { id: 4, label: "10+ Years", value: "10+ Years" },
      ],

      validations: {
        isRequired: true,
        isRequiredError: "Professional Experience is required",
        regex: "",
        regexError: "",
      },
    },
  ],
  student: [
    {
      id: 1,
      title: "Name of Institution",
      placeholder: "Eg. IIT",
      variable: "institution",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "Institution Name is Required",
        regex: "",
        regexError: "Please enter your Institution Name",
      },
    },
    {
      id: 2,
      title: "Your Course Name",
      placeholder: "Eg. B.E",
      variable: "courseName",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "Course Name is Required",
        regex: "",
        regexError: "Please enter your Course Name",
      },
    },
    {
      id: 3,
      title: "Select Your Year of Passing",
      placeholder: "Eg. 2020",
      variable: "passingYear",
      type: "reactSelect",
      isDisable: false,
      options: yearOptions,

      validations: {
        isRequired: true,
        isRequiredError: "Year of Passing is required",
        regex: "",
        regexError: "",
      },
    },
    {
      id: 4,
      title: "Enter Bank Name",
      placeholder: "Enter Bank Name",
      variable: "studentBankName",
      type: "textField",
      isDisable: false,
      validations: {
        isRequired: true,
        isRequiredError: "Enter Bank Name is Required",
        regex: "",
        regexError: "Please enter your Bank Name",
      },
    },
  ],
};

export default professionJSON;
