import CustomForm from "../../shared/CustomForm";
import CustomProgressBar from "../../shared/CustomForm/Fields/CustomProgressBar";
import CustomButton from "../../shared/CustomButton/CustomButton";
import { useState } from "react";
import OTPModal from "../../Modals/OTPModal";

import { formConfig } from "../../JSON/formConfig";
import AmountRangeModal from "../../Modals/AmountRangeModal";
import AmountRangeSection from "../../Modals/AmountRangeSection";

const InputsTesting = () => {
  const steps = [
    "Personal Details",
    "Requirement Details",
    "Professional Details",
    "Confirmation",
  ];

  const [showOTP, setShowOTP] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const goBack = () => {
    // setCurrentStep((prev) => Math.max(prev - 1, 1));
    console.log("I was clicked");
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1>Quotation Page</h1>
      <CustomProgressBar steps={steps} currentStep={1} onBack={goBack} />
      <div>
        <CustomForm config={formConfig} onSubmit={handleFormSubmit}>
          <CustomButton type="submit" bgColor="bg-black" textColor="text-white">
            Submit Form
          </CustomButton>
        </CustomForm>
      </div>

      {/* OTP Modal */}
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => setShowOTP(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Open OTP Modal
        </button>

        <OTPModal
          isOpen={showOTP}
          onClose={() => setShowOTP(false)}
          timerSeconds={120} // you can customize the timer
        />
      </div>

      {/* Amount Range Modal */}

      <div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Select Loan Amount
        </button>

        <AmountRangeModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          minAmount={50000}
          maxAmount={1000000}
        />
      </div>

      {/* AmountRangeSection  */}
        <div className="p-4">
      <AmountRangeSection minAmount={50000} maxAmount={1000000} />
    </div>




    </div>
  );
};

export default InputsTesting;
