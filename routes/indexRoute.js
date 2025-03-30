const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

// Rutas
indexRouter.get("/", indexController.getAllMessages);
indexRouter.get("/new", indexController.getForm);
indexRouter.post("/new", indexController.addMessage);
indexRouter.get("/message/:id", indexController.getMessageById);

module.exports = indexRouter;
