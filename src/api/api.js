import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// --------------------
// POST - Save Data
export const postData = async (formData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/data`, formData);
    return res.data;
  } catch (err) {
    console.error("Error posting data:", err);
    throw err;
  }
};

// --------------------
// GET - Fetch All Data
export const getData = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/data`);
    return res.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};

// --------------------
// GET - Generate OTP
export const generateOtp = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/generate-otp`);
    return res.data; // will contain { otp: "123456", expiresAt: "..." }
  } catch (err) {
    console.error("Error generating OTP:", err);
    throw err;
  }
};

// --------------------
// GET - Verify OTP
export const verifyOtp = async (otp) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/verify-otp/${otp}`);
    return res.data; // { success: true/false, message: "..." }
  } catch (err) {
    console.error("Error verifying OTP:", err);
    throw err;
  }
};
