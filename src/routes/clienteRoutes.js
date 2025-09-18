const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController"); //permite definir rotas 

router.post("/clientes", clienteController.criarCliente);
router.get("/clientes", clienteController.listarClientes);

module.exports = router;
