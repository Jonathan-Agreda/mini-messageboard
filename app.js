const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRoute");

const app = express();

// Configuración del motor de vistas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto:${PORT}`);
});
