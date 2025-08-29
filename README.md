# Mini App – Terms Page & Pricelist

This project was developed as part of a **Statement of Work (SOW)** to demonstrate full-stack development skills using **Vite + React (frontend)** and **Fastify + Sequelize + PostgreSQL (backend)** with **vanilla CSS** styling.

The application includes:

1. **Terms Page** – Replica of https://online.123fakturera.se/terms/ with multilingual support (English & Swedish) from a PostgreSQL DB.
2. **Pricelist Page** – Responsive price list table with data fetched from a PostgreSQL DB, editable fields, and different layouts for mobile, tablet, and desktop.

Both pages are **fully responsive** for mobile portrait/landscape, tablet, and desktop views.

---

## 🚀 Features

### **1. Terms Page**

- Replica of the original site with the same layout, scrolling, and click behavior.
- **Multilingual texts (English + Swedish)** stored in PostgreSQL DB.
- Background image, logo, and flags loaded from existing storage URLs:
  - SE Flag: `https://storage.123fakturere.no/public/flags/SE.png`
  - GB Flag: `https://storage.123fakturere.no/public/flags/GB.png`
  - Background: `https://storage.123fakturera.se/public/wallpapers/sverige43.jpg`
  - Icon: `https://storage.123fakturera.se/public/icons/diamond.png`
- Hamburger menu functionality included.

---

### **2. Pricelist Page**

- Responsive table layout:
  - **Mobile:** Minimal columns for smaller screens.
  - **Tablet:** Moderate column set.
  - **Desktop:** Full column set.
- Data pulled from PostgreSQL backend via REST APIs.
- Editable cells with auto-save to DB.
- Supports at least **20 product rows** for testing scroll behavior.
- Plain CSS styling, same headers as original system (custom icons allowed).

---

## 🛠 Tech Stack & Versions

### **Frontend**

- **React**: 19.1.1
- **Vite**: 7.1.2
- **React Router DOM**: 7.8.2
- **i18next + react-i18next**: 25.4.2 (for multilingual support)
- **Lucide-react**: 0.542.0 (for icons)
- **Vanilla CSS** for styling

### **Backend**

- **Fastify**: 5.5.0
- **@fastify/cors**: 11.1.0
- **Sequelize**: 6.37.7
- **PostgreSQL driver (pg + pg-hstore)**: 8.16.3

### **Language**

- **JavaScript (ES Modules)**

---
