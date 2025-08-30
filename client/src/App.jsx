import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import PriceListPage from "./pages/PriceListPage";
import Navbar from "./components/Navbar";
import "./App.css";
import useAppHeight from "./hooks/useAppHeight";

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("english");
  useAppHeight();
  return (
    <>
      <BrowserRouter>
        <Navbar
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <TermsAndConditionPage selectedLanguage={selectedLanguage} />
            }
          />
          <Route
            path="/price-list"
            element={<PriceListPage selectedLanguage={selectedLanguage} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
