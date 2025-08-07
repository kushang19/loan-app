import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Quotations from "./pages/Quotation/Quotations";
import CustomButtonTesting from "./TestingPages/CustomButtonTesting/CustomButtonTesting";
import InputsTesting from "./TestingPages/InputsTesting/InputsTesting";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BlogsArticles from "./pages/BlogsArticles";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import ROUTES from "./routes"; // ⬅️ import the route constants
import PersonalDetails1 from "./pages/FormPage/PersonalDetails/PersonalDetails1";
import PersonalDetails2 from "./pages/FormPage/PersonalDetails/PersonalDetails2";
import RequirementDetails1 from "./pages/FormPage/RequirementDetails/RequirementDetails1";
import RequirementDetails2 from "./pages/FormPage/RequirementDetails/RequirementDetails2";
import ProfessionalDetails1 from "./pages/FormPage/ProfessionalDetails/ProfessionalDetails1";
import ProfessionalDetails2 from "./pages/FormPage/ProfessionalDetails/ProfessionalDetails2";
import ConfirmationPage from "./pages/FormPage/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.about} element={<AboutUs />} />
          <Route path={ROUTES.contact} element={<ContactUs />} />
          <Route path={ROUTES.faqs} element={<FAQs />} />
          <Route path={ROUTES.blogArticles} element={<BlogsArticles />} />

          {/* Protected Routes */}
          <Route path={ROUTES.personalDetails1} element={<PersonalDetails1 />} />
          <Route path={ROUTES.personalDetails2} element={<PersonalDetails2 />} />

          <Route path={ROUTES.requirementDetails1} element={<RequirementDetails1 />} />
          <Route path={ROUTES.requirementDetails2} element={<RequirementDetails2 />} />

          <Route path={ROUTES.professionalDetails1} element={<ProfessionalDetails1 />} />
          <Route path={ROUTES.professionalDetails2} element={<ProfessionalDetails2 />} />

          <Route path={ROUTES.confirmation} element={<ConfirmationPage />} />

          <Route path={ROUTES.quotations} element={<Quotations />} />
          <Route path={ROUTES.customButtons} element={<CustomButtonTesting />} />
          <Route path={ROUTES.dynamicInputs} element={<InputsTesting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
