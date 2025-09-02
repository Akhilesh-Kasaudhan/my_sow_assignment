import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import { BASE_URL } from "./utils/constants";
import Navbar from "./components/Navbar";
import PriceListPage from "./components/PriceListPage";
import useAppHeight from "./hooks/useAppHeight";

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [terms, setTerms] = useState("");
  const { t } = useTranslation();
  useAppHeight();

  const languageMap = {
    english: "en",
    svenska: "sv",
  };

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/terms`);
        if (!response.ok) throw new Error("Failed to fetch terms");
        const data = await response.json();
        console.log("Fetched terms:", data);

        const filteredTerms = data.filter(
          (term) => term.language === languageMap[selectedLanguage]
        );

        setTerms(filteredTerms);
      } catch (err) {
        console.error("Error fetching terms:", err);
      }
    };
    fetchTerms();
  }, [selectedLanguage, languageMap]);
  return (
    <div className="app-container">
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="terms-container">
              <h1 className="terms-title">{t("terms_title")}</h1>
              <div className="terms-close-button">{t("close_button")}</div>

              <div className="terms-content">
                {terms.length > 0 ? (
                  terms.map((term) => (
                    <div key={term.id} className="terms-block">
                      <p>{term.content}</p>
                    </div>
                  ))
                ) : (
                  <p>{t("no_terms_available")}</p>
                )}
              </div>

              <div className="terms-close-button">{t("close_button")}</div>
            </div>
          }
        />
        <Route path="/price-list" element={<PriceListPage />} />
      </Routes>
    </div>
  );
};

export default App;
