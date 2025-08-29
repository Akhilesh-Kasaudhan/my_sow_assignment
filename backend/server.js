const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
const db = require("./models");

fastify.register(cors, { origin: "*" });
fastify.decorate("db", db);

fastify.register(require("./routes/pricelistRoute.js"));
fastify.register(require("./routes/termsRoutes.js"));
const PORT = 3000;

const start = async () => {
  try {
    await db.sequelize.sync();
    await fastify.listen({ port: PORT, host: "0.0.0.0" });
    fastify.log.info(`Server listening on http://0.0.0.0:${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
