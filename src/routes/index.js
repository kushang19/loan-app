// src/routes.js or src/routes/index.js

const ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
  faqs: "/faqs",
  blogArticles: "/blog-articles",

  personalDetails: "/form/personal-details/:step", 
  requirementDetails: "/form/requirement-details/:step",
  professionalDetails: "/form/professional-details/:step",

  confirmation: "/form/confirmation",

  customButtons: "/custom-buttons",
};

export default ROUTES;
