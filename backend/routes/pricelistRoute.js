function pricelistRoute(fastify, options, done) {
  const { Pricelist } = fastify.db;

  // Get all pricelist items
  fastify.get("/api/pricelist", async (request, reply) => {
    try {
      const pricelist = await Pricelist.findAll();
      return pricelist;
    } catch (error) {
      reply.code(500).send({ error: "Failed to fetch pricelist" });
    }
  });

  // Update a pricelist field
  fastify.post("/api/pricelist/update", async (request, reply) => {
    try {
      const updatedProduct = request.body; // whole product object
      const { id } = updatedProduct;

      const product = await Pricelist.findByPk(id);
      if (!product) {
        return reply.code(404).send({ error: "Product not found" });
      }

      // Update all fields at once except id, createdAt, updatedAt
      Object.keys(updatedProduct).forEach((key) => {
        if (!["id", "createdAt", "updatedAt"].includes(key)) {
          product[key] = updatedProduct[key];
        }
      });

      await product.save();
      return { success: true, product };
    } catch (error) {
      console.error("Update Error:", error);
      reply.code(500).send({ error: "Failed to update pricelist" });
    }
  });

  done();
}

module.exports = pricelistRoute;
