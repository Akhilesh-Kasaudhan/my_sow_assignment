import React from "react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ selectedLanguage, setSelectedLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation();

  const languages = [
    {
      code: "english",
      name: "English",
      flag: "english-flag.png",
    },
    {
      code: "svenska",
      name: "Svenska",
      flag: "swedish-flag.png",
    },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === selectedLanguage);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
    i18n.changeLanguage(lang === "english" ? "en" : "sv");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="nav-container">
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <AlignJustify className="hamburger-icon" />
        </div>
        <div className="logo-container">
          <img
            src="icon.png"
            alt=""
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="navbar-menu desktop-menu">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {t("navbar_home")}
              </Link>
            </li>
            <li className="nav-item">
              <a href="#order" className="nav-link">
                {t("navbar_order")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#customers" className="nav-link">
                {t("navbar_customers")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                {t("navbar_about")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                {t("navbar_contact")}
              </a>
            </li>
            <li className="nav-item">
              <a href="/price-list" className="nav-link">
                {t("navbar_price_list")}
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-language">
          <div className="language-selector" ref={dropdownRef}>
            <div className="language-display" onClick={toggleDropdown}>
              <span className="language-text">{getCurrentLanguage().name}</span>
              <img
                src={getCurrentLanguage().flag}
                alt={`${getCurrentLanguage().name} flag`}
                className="flag-icon"
                width="20"
                height="15"
              />
            </div>

            {isDropdownOpen && (
              <div className="language-dropdown">
                {languages.map((language) => (
                  <div
                    key={language.code}
                    className={`language-option ${
                      selectedLanguage === language.code ? "selected" : ""
                    }`}
                    onClick={() => handleLanguageSelect(language.code)}
                  >
                    <span className="language-name">{language.name}</span>
                    <img
                      src={language.flag}
                      alt={`${language.name} flag`}
                      className="option-flag"
                      width="20"
                      height="15"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="mobile-nav-links">
            <li className="mobile-nav-item">
              <Link
                to="/"
                className="mobile-nav-link"
                onClick={toggleMobileMenu}
              >
                {t("navbar_home")}
              </Link>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#order"
                className="mobile-nav-link"
                onClick={toggleMobileMenu}
              >
                {t("navbar_order")}
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#customers"
                className="mobile-nav-link"
                onClick={toggleMobileMenu}
              >
                {t("navbar_customers")}
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#about"
                className="mobile-nav-link"
                onClick={toggleMobileMenu}
              >
                {t("navbar_about")}
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={toggleMobileMenu}
              >
                {t("navbar_contact")}
              </a>
            </li>

            <li className="mobile-nav-item">
              <Link
                to="/price-list"
                className="mobile-nav-link"
                onClick={toggleMobileMenu}
              >
                {t("navbar_price_list")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
