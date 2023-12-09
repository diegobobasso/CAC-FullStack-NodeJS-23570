const express = require('express'); 
const router = express.Router();    // Usamos Router de express

// Definimos rutas e importamos los controladores para cada ruta

const {mainController, contactController, aboutController, faqsController} = require('../Controllers/mainController');

router.get('/', mainController);
router.get('/contact', contactController);
router.get('/about', aboutController);
router.get('/faqs', faqsController);

// Exportamos la ruta
 
module.exports = router; 