// src/routes/AppRoutes.js
import { Route } from "react-router-dom";
import ROUTES from "./index";
import Layout from "../layout/Layout";
import Home from "../pages/dynamic/Home";
import AboutUs from "../pages/static/AboutUs";
import ContactUs from "../pages/static/ContactUs";
import FAQs from "../pages/static/FAQs";
import BlogsArticles from "../pages/static/BlogsArticles";
import CustomButtonTesting from "../TestingPages/CustomButtonTesting/CustomButtonTesting";
import PersonalDetails from "../pages/dynamic/FormPage/PersonalDetails";
import RequirementDetails from "../pages/dynamic/FormPage/RequirementDetails";
import ProfessionalDetails from "../pages/dynamic/FormPage/ProfessionalDetails";
import ConfirmationPage from "../pages/dynamic/FormPage/Confirmation";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/static/NotFound";

export const AppRoutes = (
  <Route element={<Layout />}>
    {/* Public Routes */}
    <Route path={ROUTES.home} element={<Home />} />
    <Route path={ROUTES.about} element={<AboutUs />} />
    <Route path={ROUTES.contact} element={<ContactUs />} />
    <Route path={ROUTES.faqs} element={<FAQs />} />
    <Route path={ROUTES.blogArticles} element={<BlogsArticles />} />
    <Route path={ROUTES.customButtons} element={<CustomButtonTesting />} />

    {/* Private Routes */}
    <Route
      path={ROUTES.personalDetails}
      element={
        <PrivateRoute>
          <PersonalDetails />
        </PrivateRoute>
      }
    />
    <Route
      path={ROUTES.requirementDetails}
      element={
        <PrivateRoute>
          <RequirementDetails />
        </PrivateRoute>
      }
    />
    <Route
      path={ROUTES.professionalDetails}
      element={
        <PrivateRoute>
          <ProfessionalDetails />
        </PrivateRoute>
      }
    />
    <Route
      path={ROUTES.confirmation}
      element={
        <PrivateRoute>
          <ConfirmationPage />
        </PrivateRoute>
      }
    />
    {/* 404 fallback */}
    <Route path="*" element={<NotFound />} />
  </Route>
);
