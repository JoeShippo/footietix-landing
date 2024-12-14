import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ForFans from "./components/ForFans";
import ForClubs from "./components/ForClubs";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieBanner from "./components/CookieBanner"; // Import your CookieBanner


const App = () => (
  <Router>
    <div>
    <CookieBanner />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div id="fans">
                <ForFans />
              </div>
              <div id="clubs">
                <ForClubs />
              </div>
              <div id="signup">
                <SignUp />
              </div>
            </>
          }
        />

        {/* Legal Pages */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;