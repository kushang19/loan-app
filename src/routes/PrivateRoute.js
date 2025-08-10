// src/routes/PrivateRoute.js
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // For now, store OTP verification status in sessionStorage
  const isAuthenticated = sessionStorage.getItem("otpVerified") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
