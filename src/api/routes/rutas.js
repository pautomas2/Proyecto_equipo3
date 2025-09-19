export default async function usuarioRoutes(app) {
  app.get("/", async function (req, res) {
    return { root: true };
  });
}
