import { BrowserRouter, Routes } from "react-router-dom";
import ScrollToTop from "./routes/ScrollToTop";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/loan-app">
      <ScrollToTop />
     <Routes>{AppRoutes}</Routes>
    </BrowserRouter>
  );
}

export default App;
