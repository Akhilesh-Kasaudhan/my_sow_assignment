function termsRoutes(fastify, options, done) {
  const { Terms } = fastify.db;

  fastify.get("/api/terms", async (request, reply) => {
    try {
      const terms = await Terms.findAll();
      return terms;
    } catch (error) {
      reply.code(500).send({ error: "Failed to fetch terms" });
    }
  });
  done();
}

module.exports = termsRoutes;
