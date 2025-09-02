import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./PriceListPage.css";
import { BASE_URL } from "../utils/constants";

const PriceListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const { t } = useTranslation();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/pricelist`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdateProduct = async (id) => {
    try {
      setSaving(true);
      const product = products.find((p) => p.id === id);
      const response = await fetch(`${BASE_URL}/api/pricelist/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!response.ok) throw new Error("Failed to update product");
      await fetchProducts();
    } catch (err) {
      console.error("Error updating product:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (id, field, value) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="pricelist-container">
      <div className="pricelist-header">
        <div className="search-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Article No...."
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Product...."
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
        <div className="action-buttons">
          <button className="action-btn new-product">+ New Product</button>
          <button className="action-btn print-list">🖨️ Print List</button>
          <button className="action-btn advanced-mode">⚙️ Advanced mode</button>
        </div>
      </div>

      <div className="table-container">
        <table className="pricelist-table">
          <thead>
            <tr>
              <th className="tablet-desktop">{t("price_list_article_no")}</th>
              <th className="mobile-tablet-desktop">
                {t("price_list_product_service")}
              </th>
              <th className="desktop-only">{t("price_list_in_price")}</th>
              <th className="mobile-tablet-desktop">{t("price_list_price")}</th>

              <th className="tablet-desktop">{t("price_list_unit")}</th>

              <th className="tablet-desktop">{t("price_list_in_stock")}</th>

              <th className="desktop-only">{t("price_list_description")}</th>

              <th className="mobile-tablet-desktop">
                {t("price_list_actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {products
              .slice()
              .sort((a, b) => a.article_no.localeCompare(b.article_no))
              .map((product, index) => (
                <tr
                  key={product.id}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  {[
                    "article_no",
                    "product_name",
                    "in_price",
                    "price",
                    "unit",
                    "in_stock",
                    "description",
                  ].map((field, i) => (
                    <td
                      key={i}
                      className={`${
                        field === "article_no" ||
                        field === "unit" ||
                        field === "in_stock"
                          ? "tablet-desktop"
                          : field === "in_price" || field === "description"
                          ? "desktop-only"
                          : "mobile-tablet-desktop"
                      }`}
                    >
                      <input
                        type="text"
                        value={product[field] || ""}
                        onChange={(e) =>
                          handleInputChange(product.id, field, e.target.value)
                        }
                        className="input-field"
                      />
                    </td>
                  ))}
                  <td className="mobile-tablet-desktop">
                    <button
                      className="save-btn"
                      onClick={() => handleUpdateProduct(product.id)}
                      disabled={saving}
                    >
                      {saving ? "Saving..." : t("price_list_save")}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceListPage;
