import React, { useState, useRef, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import { useTranslation } from "react-i18next";

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when clicking outside
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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Mobile hamburger menu */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <AlignJustify className="hamburger-icon" />
        </div>

        <div className="navbar-logo">
          <img src="icon.png" alt="Logo" className="logo-image" />
        </div>

        {/* Desktop menu */}
        <div className="navbar-menu desktop-menu">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                {t("navbar_home")}
              </a>
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
          </ul>
        </div>

        {/* Language selector - always visible */}
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

        {/* Mobile menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="mobile-nav-links">
            <li className="mobile-nav-item">
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={toggleMobileMenu}
              >
                {t("navbar_home")}
              </a>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
