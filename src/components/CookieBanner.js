import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  const handleAcceptCookies = () => {
    // Save consent status in localStorage or cookies
    localStorage.setItem("cookiesAccepted", true);
    console.log("Cookies accepted.");
    // Add your logic to enable analytics or other cookies here
  };

  const handleDeclineCookies = () => {
    // Save decline status in localStorage or cookies
    localStorage.setItem("cookiesAccepted", false);
    console.log("Cookies declined.");
    // Add your logic to disable tracking cookies here
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={handleAcceptCookies}
      onDecline={handleDeclineCookies}
      style={{ background: "#2B373B", color: "white" }}
      buttonStyle={{
        backgroundColor: "#4CAF50",
        color: "white",
        fontSize: "13px",
        borderRadius: "5px",
      }}
      declineButtonStyle={{
        backgroundColor: "#f44336",
        color: "white",
        fontSize: "13px",
        borderRadius: "5px",
      }}
    >
      This website uses cookies to improve your experience.{" "}
      <a href="/cookie-policy" style={{ color: "#4CAF50" }}>
        Learn more
      </a>.
    </CookieConsent>
  );
};

export default CookieBanner;