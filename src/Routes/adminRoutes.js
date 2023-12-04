const express = require("express"); // Importamos express
const router = express.Router(); // Usamos Router de express
const multer = require("multer");
const path = require("path");
/*
const uploadFiles = multer({ 
  destination: 'public/multimedia/upload_img/',
  filename: `${Date.now}_${this.originalname}` 
});  
*/

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/multimedia/upload_img')),
  filename: (req, file, cb) => cb(null,Date.now() + '_' + file.originalname)
  });
  const uploadFiles = multer({storage});

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

router.get("/", adminView);
router.post("/", adminFind);
router.get("/create", createView);
router.post("/create", uploadFiles.array('files', 2), createItem);
router.get("/edit/:id", editView);
router.post("/edit/:id", editUpdate);
router.get("/delete/:id", deleteView);
router.post("/delete/:id", deleteItem);

// Exportamos la ruta

module.exports = router;
