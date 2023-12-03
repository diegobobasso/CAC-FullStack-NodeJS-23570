const express = require("express"); // Importamos express
const router = express.Router(); // Usamos Router de express

// Definimos e importamos los controladores

const {
  adminView,
  adminFind,
  createView,
  createItem,
  editView,
  editUpdate,
  deleteView,
  deleteItem,
} = require("../Controllers/adminController");

// const {uploadFile} = require("../utiles/uploadService");

router.get("/", adminView);
router.post("/", adminFind);
router.get("/create", createView);
router.post("/create", createItem); // agregar uploadFile.array('files')
router.get("/edit/:id", editView);
router.post("/edit/:id", editUpdate);
router.get("/delete/:id", deleteView);
router.post("/delete/:id", deleteItem);

// Exportamos la ruta

module.exports = router;
