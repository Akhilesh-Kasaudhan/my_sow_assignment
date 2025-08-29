module.exports = (sequelize, DataTypes) => {
  const Terms = sequelize.define("Terms", {
    language: DataTypes.STRING,
    content: DataTypes.TEXT,
  });
  return Terms;
};
