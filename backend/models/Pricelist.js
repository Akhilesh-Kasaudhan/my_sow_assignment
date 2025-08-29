module.exports = (sequelize, DataTypes) => {
  const Pricelist = sequelize.define("Pricelist", {
    article_no: DataTypes.STRING,
    product_name: DataTypes.STRING,
    in_price: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    unit: DataTypes.STRING,
    in_stock: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  });
  return Pricelist;
};
