export default async function usuarioRoutes(app) {
  app.get("/", async function (req, res) {
    return res.status(200).send({ root: true });
  });
}
