import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        terms_title: "Terms",
        close_button: "Close and Go Back",
        price_list_title: "Price List",
        price_list_article_no: "Artical no.",
        price_list_product_service: "Product/service",
        price_list_in_price: "In price",
        price_list_price: "Price",
        price_list_unit: "Unit",
        price_list_in_stock: "In Stock",
        price_list_description: "Description",
        price_list_actions: "Actions",
        price_list_save: "Save",
        navbar_home: "Home",
        navbar_order: "Order",
        navbar_customers: "Our Customers",
        navbar_about: "About us",
        navbar_contact: "Contact Us",
        navbar_terms: "Terms",
        navbar_price_list: "Price List",
      },
    },
    sv: {
      translation: {
        terms_title: "Villkor",
        close_button: "Stäng och gå tillbaka",
        price_list_title: "Prislista",
        price_list_article_no: "Artikelnummer",
        price_list_product_service: "Produkt/tjänst",
        price_list_in_price: "I pris",
        price_list_price: "Pris",
        price_list_unit: "Enhet",
        price_list_in_stock: "I lager",
        price_list_description: "Beskrivning",
        price_list_actions: "Åtgärder",
        price_list_save: "Spara",

        navbar_home: "Hem",
        navbar_order: "Beställ",
        navbar_customers: "Våra Kunder",
        navbar_about: "Om Oss",
        navbar_contact: "Kontakta Oss",
        navbar_terms: "Villkor",
        navbar_price_list: "Prislista",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
