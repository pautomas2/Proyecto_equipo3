import Fastify from "fastify";
import autoLoad from "@fastify/autoload";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({ logger: true });

fastify.register(autoLoad, {
  dir: join(__dirname, "./src/api/routes"),
});

try {
  fastify.listen({ port: 3000, host: "::" });
} catch (error) {
  console.log(error);
}
