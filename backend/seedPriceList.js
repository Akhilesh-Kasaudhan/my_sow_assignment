const { Pricelist } = require("./models");

const seedPricelist = async () => {
  const products = Array.from({ length: 20 }).map((_, i) => ({
    article_no: `A${String(i + 1).padStart(3, "0")}`,
    product_name: `Product ${i + 1}`,
    in_price: (10 + i).toFixed(2),
    price: (15 + i).toFixed(2),
    unit: "pcs",
    in_stock: 50 + i,
    description: `Description of test product ${i + 1}`,
  }));

  await Pricelist.bulkCreate(products);
  console.log("20 products seeded successfully!");
};

seedPricelist();
