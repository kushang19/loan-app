import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import FormPage from "./pages/FormPage/FormPage";
import Quotations from "./pages/Quotation/Quotations";
import CustomButtonTesting from "./TestingPages/CustomButtonTesting/CustomButtonTesting";
import InputsTesting from "./TestingPages/InputsTesting/InputsTesting";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BlogsArticles from "./pages/BlogsArticles";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog-articles" element={<BlogsArticles />} />

          {/* Protected Routes */}
          <Route path="/form" element={<FormPage />} />
          <Route path="/quotations" element={<Quotations />} />
          <Route path="/custom-buttons" element={<CustomButtonTesting />} />
          <Route path="/dynamic-inputs" element={<InputsTesting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://www.shriramfinance.in/personal-loan
