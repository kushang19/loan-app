import React, { useState } from "react";
import CustomCard from "../../../shared/CustomCard/CustomCard";
import CustomForm from "../../../shared/CustomForm";
import CustomButton from "../../../shared/CustomButton/CustomButton";
import ROUTES from "../../../routes";
import OTPModal from "../../../Modals/OTPModal";


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
         <h1
            className="text-blue-800"
            style={{ margin: "10px 0", fontSize: "27px", fontWeight: "bold", textAlign: "center" }}
          >
            Please Enter Your Mobile Number To Login Our Loan Application.
          </h1>
          <div className="gold-coins mb-10 text-center" >
            <span className="text-5xl">💰</span>
            <span className="text-5xl">💰</span>
            <span className="text-5xl">💰</span>
          </div>
        <CustomCard>
          <CustomForm config={mobileInput} onSubmit={handleFormSubmit}>
            <div className="flex justify-end flex-wrap mt-4 w-full">
            <CustomButton
              type="submit"
              rounded="rounded-full"
              hover="hover:bg-blue-700"
            >
              Let's Go
            </CustomButton>
            </div>
          </CustomForm>
        </CustomCard>

        <OTPModal
          isOpen={showOTP}
          onClose={() => setShowOTP(false)}
          timerSeconds={120} // you can customize the timer
          route={ROUTES.personalDetails.replace(":step", 1)}
        />
      </div>
    </>
  );
};

export default Home;
