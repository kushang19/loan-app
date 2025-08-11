import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { postData, generateOtp, verifyOtp, getData } from "../../../../api/api";

const lenders = [
  {
    name: "HDFC Bank",
    interest: "10.5% p.a",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/512px-HDFC_Bank_Logo.svg.png",
  },
  {
    name: "ICICI Bank",
    interest: "11.2% p.a",
    logo: "https://img.etimg.com/thumb/msid-71258650,width-300,height-225,imgsize-180986,resizemode-75/icici-bank-others.jpg",
  },
  {
    name: "Bajaj Finserv",
    interest: "12.0% p.a",
    logo: "https://www.eqimg.com/images/2024/09022024-image7-equitymaster.jpg",
  },
];

const ConfirmationPage = () => {
  const mobileNumber = JSON.parse(sessionStorage.getItem("mobileNumber"));
  const personalDetails_1 = JSON.parse(
    sessionStorage.getItem("personalDetails-1")
  );
  const personalDetails_2 = JSON.parse(
    sessionStorage.getItem("personalDetails-2")
  );
  const requirementDetails = JSON.parse(
    sessionStorage.getItem("requirementDetails")
  );
  const professionalDetails = JSON.parse(
    sessionStorage.getItem("professionalDetails")
  );

  const data = {
    ...mobileNumber,
    ...personalDetails_1,
    ...personalDetails_2,
    ...requirementDetails,
    ...professionalDetails,
  };

  const postDataAPIHandler = async (payload) => {
    await postData(payload);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      postDataAPIHandler(data);
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-200 flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center justify-center text-center mb-10 mt-10">
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>

      {/* Animation and Heading */}
      <div className="animate-bounce text-4xl sm:text-5xl font-bold text-purple-700 mb-4 text-center">
        🎉 Congratulations!{" "}
        <span>
          {personalDetails_1?.firstName} {personalDetails_1?.lastName}
        </span>
      </div>
      <p className="text-lg text-gray-700 text-center mb-8">
        Your loan application has been successfully submitted.
      </p>

      {/* Lender Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {lenders.map((lender, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img src={lender.logo} alt={lender.name} className="h-16 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              {lender.name}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Interest Rate: {lender.interest}
            </p>
          </div>
        ))}
      </div>

      {/* Thank You Message */}
      <p className="mt-10 text-center text-md text-gray-800 max-w-xl">
        Our trusted lenders have received your information and will reach out to
        you shortly. Thank you for choosing{" "}
        <span className="font-semibold text-purple-700">Loan App</span>!
      </p>
    </div>
  );
};

export default ConfirmationPage;
