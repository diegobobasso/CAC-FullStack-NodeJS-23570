const express = require("express"); // Importamos express
const router = express.Router();    // Usamos Router de express

// Definimos e importamos los controladores

const {shopView, shopFind, cartView, itemView} = require("../Controllers/shopController");

router.get("/", shopView);
router.post("/", shopFind);
router.get("/item/:id", itemView);
router.post("/item/:id/add", itemView);
router.get("/cart", cartView);
router.post("/cart", cartView);

// Exportamos la ruta 

module.exports = router; 