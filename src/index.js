const express = require("express");
const app = express();
const clienteRoutes = require("./routes/clienteRoutes");
const sequelize = require("./config/database");

app.use(express.json());
app.use("/", clienteRoutes);

// Sincroniza o banco e inicia o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });
});
