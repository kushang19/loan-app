import { useEffect, useState } from "react";
import ROUTES from "../../../routes";
import { useForm } from "react-hook-form";

export const useLogic = () => {
  const {
    register,
    control,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({reValidateMode: 'onChange', mode: 'onChange'});
  const [showOTP, setShowOTP] = useState(false);

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    sessionStorage.setItem("mobileNumber", JSON.stringify(data));
    setShowOTP(true);
  };

  const handleCloseOTP = () => setShowOTP(false);

  useEffect(() => {
    sessionStorage.removeItem('otpVerified');
    sessionStorage.removeItem('personalDetails-1');
    sessionStorage.removeItem('personalDetails-2');
    sessionStorage.removeItem('requirementDetails');
    sessionStorage.removeItem('professionalDetails');
  },[])

  return {
    register,
    control,
    setValue,
    getValues,
    errors,
    watch,
    showOTP,
    setShowOTP,
    onSubmit,
    handleSubmit,
    handleCloseOTP,
    ROUTES,
  };
};
