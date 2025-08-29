import React, { useState, useEffect } from "react";
import "./Terms.css";
import { useTranslation } from "react-i18next";

const TermsAndConditionPage = ({ selectedLanguage }) => {
  const [terms, setTerms] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const fetchTerms = async () => {
      const response = await fetch("http://localhost:3000/api/terms");
      const data = await response.json();

      const langCode = selectedLanguage === "english" ? "en" : "sv";
      const termForLang = data.find((t) => t.language === langCode);

      setTerms(
        termForLang
          ? termForLang.content
          : "Terms not available for this language."
      );
    };
    fetchTerms();
  }, [selectedLanguage]);

  // Handle the close button click
  const handleClose = () => {
    window.open("https://chrome.com", "_blank"); // opens in a new tab
  };

  return (
    <div className="terms-container">
      <h1 className="terms-title">{t("terms_title")}</h1>

      <div className="close" onClick={handleClose}>
        <p>{t("close_button")}</p>
      </div>

      <div className="terms">
        <div className="terms-content">
          <p>{terms}</p>
        </div>
      </div>
      <div className="close" onClick={handleClose}>
        <p>{t("close_button")}</p>
      </div>
    </div>
  );
};

export default TermsAndConditionPage;
