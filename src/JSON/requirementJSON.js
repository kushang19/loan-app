import homeloan from "../assets/images/homeloan.jpg";
import carloan from "../assets/images/carloan.avif";
import businessloan from "../assets/images/BusinessLoan.jpg";
import goldloan from "../assets/images/Gold_Loan.jpg";
import personalloan from "../assets/images/Personal_loan.avif";
import creditcard from "../assets/images/credit-card.webp";

const requirementJSON = {
  1: [
    {
      id: 1,
      title: "Choose a Card Option",
      variable: "cardChoice",
      type: "cardButton",
      isDisable: false,
      options: [
        {
          label: "Personal Loan",
          value: "personal-loan",
          image: personalloan,
          description:
            "Get instant personal loans with minimal documentation and fast approvals.",
        },
        {
          label: "Credit Card",
          value: "credit-card",
          image: creditcard,
          description:
            "Choose the best credit cards with exclusive rewards, offers, and benefits.",
        },
        {
          label: "Home Loan",
          value: "home-loan",
          image: homeloan,
          description:
            "Explore our platform and discover financial solutions tailored to you",
        },
        {
          label: "Business Loan",
          value: "business-loan",
          image: businessloan,
          description:
            "Empower your business with flexible and hassle-free funding options.",
        },
        {
          label: "Car Loan",
          value: "car-loan",
          image: carloan,
          description:
            "Drive your dream car with our easy and affordable car loan plans.",
        },
        {
          label: "Gold Loan",
          value: "gold-loan",
          image: goldloan,
          description:
            "Unlock the value of your gold with secure and quick gold loans.",
        },
      ],
      validations: {
        isRequired: true,
        isRequiredError: "Please select a card option",
      },
    },
  ],
  2: [
    {
      id: 5,
      title: "Select Reason for Your Loan",
      placeholder: "Select Reason",
      variable: "loanReason",
      type: "reactSelect",
      isDisable: false,
      options: [
        { id: 1, label: "Medical Emergency", value: "Medical Emergency" },
        {
          id: 2,
          label: "Wedding or Family Function",
          value: "Wedding or Family Function",
        },
        {
          id: 3,
          label: "Renovate or Repair Home",
          value: "Renovate or Repair Home",
        },
        {
          id: 4,
          label: "Buy a Gadget or Appliance",
          value: "Buy a Gadget or Appliance",
        },
        { id: 5, label: "Travel or Vacation", value: "Travel or Vacation" },
        {
          id: 6,
          label: "Home Buying or Renovation",
          value: "Home Buying or Renovation",
        },
        { id: 7, label: "Education Expenses", value: "Education Expenses" },
        { id: 8, label: "Debt Consolidation", value: "Debt Consolidation" },
        { id: 9, label: "Business Investment", value: "Business Investment" },
        { id: 10, label: "Vehicle Purchase", value: "Vehicle Purchase" },
        { id: 11, label: "Others", value: "Others" },
      ],

      validations: {
        isRequired: true,
        isRequiredError: "Loan Reason is required",
        regex: "",
        regexError: "",
      },
    },
  ],
};

export default requirementJSON;