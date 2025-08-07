import React, { useState } from "react";
import CustomCard from "../../shared/CustomCard/CustomCard";
import CustomForm from "../../shared/CustomForm";
import CustomButton from "../../shared/CustomButton/CustomButton";
import OTPModal from "../../Modals/OTPModal";

const mobileInput = [
  {
    id: 1,
    title: "Mobile Number",
    placeholder: "Enter mobile number",
    variable: "mobile",
    type: "mobileField",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "Mobile number is required",
      regex: "^\\d{10}$",
      regexError: "Must be a valid 10-digit number",
    },
  },
  {
    id: 2,
    title: "I confirm that this is my registered mobile number and authorize Loan App to use it for communications related to my loan application, as per the Terms & Conditions and Privacy Policy.",
    variable: "termsAccepted",
    type: "checkbox",
    isDisable: false,
    validations: {
      isRequired: true,
      isRequiredError: "You must accept the terms to continue",
    },
  },
];

const Home = () => {
  const [showOTP, setShowOTP] = useState(false);

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    sessionStorage.setItem("mobileNumber", JSON.stringify(data));
    setShowOTP(true);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-2 mt-10">
        <CustomCard>
          <CustomForm config={mobileInput} onSubmit={handleFormSubmit}>
            <CustomButton
              type="submit"
              bgColor="bg-black"
              textColor="text-white"
            >
              Submit
            </CustomButton>
          </CustomForm>
        </CustomCard>

        <OTPModal
          isOpen={showOTP}
          onClose={() => setShowOTP(false)}
          timerSeconds={120} // you can customize the timer
          route="/form"
        />
      </div>
    </>
  );
};

export default Home;
