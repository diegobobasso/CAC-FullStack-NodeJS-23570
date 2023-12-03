const express = require("express"); // Importamos express
const router = express.Router();    // Usamos Router de express

// Definimos e importamos los controladores

const {mainController} = require("../Controllers/mainController");

router.get("/", mainController);
router.get("/contact", (req, res) => res.send("Estas en contacto."));
router.get("/about", (req, res) => res.send("Estas en acerca de."));
router.get("/faqs", (req, res) => res.send("Estas en preguntas y respuestas."));

// Exportamos la ruta

module.exports = router; 