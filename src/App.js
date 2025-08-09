import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import Layout from "./layout/Layout";
import ScrollToTop from "./routes/ScrollToTop";
import Home from "./pages/dynamic/Home";
import BlogsArticles from "./pages/static/BlogsArticles";
import ContactUs from "./pages/static/ContactUs";
import FAQs from "./pages/static/FAQs";
import ConfirmationPage from "./pages/dynamic/FormPage/Confirmation";
import PersonalDetails from "./pages/dynamic/FormPage/PersonalDetails";
import RequirementDetails from "./pages/dynamic/FormPage/RequirementDetails";
import ProfessionalDetails from "./pages/dynamic/FormPage/ProfessionalDetails";
import CustomButtonTesting from "./TestingPages/CustomButtonTesting/CustomButtonTesting";
import AboutUs from "./pages/static/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.about} element={<AboutUs />} />
          <Route path={ROUTES.contact} element={<ContactUs />} />
          <Route path={ROUTES.faqs} element={<FAQs />} />
          <Route path={ROUTES.blogArticles} element={<BlogsArticles />} />
          <Route path={ROUTES.personalDetails} element={<PersonalDetails />} />
          <Route
            path={ROUTES.requirementDetails}
            element={<RequirementDetails />}
          />
          <Route
            path={ROUTES.professionalDetails}
            element={<ProfessionalDetails />}
          />
          <Route path={ROUTES.confirmation} element={<ConfirmationPage />} />
          <Route
            path={ROUTES.customButtons}
            element={<CustomButtonTesting />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
