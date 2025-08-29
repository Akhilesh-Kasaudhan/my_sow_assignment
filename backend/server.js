const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
const db = require("./models");

fastify.register(cors, { origin: "*" });
fastify.decorate("db", db);

fastify.register(require("./routes/pricelistRoute.js"));
fastify.register(require("./routes/termsRoutes.js"));

const start = async () => {
  try {
    await db.sequelize.sync();
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server listening on http://localhost:3000`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
