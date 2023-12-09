const express = require('express');
const router = express.Router();    // Usamos Router de express

// Definimos rutas e importamos los controladores para cada ruta

const {
    shopView, 
    shopFind, 
    cartView,
    cartItemAdd, 
    itemView
} = require('../Controllers/shopController');

const { isLogin } = require('../utiles/authServices')

router.get('/', isLogin, shopView);
router.post('/', isLogin, shopFind);
router.get('/item/:id', isLogin, itemView);
router.post('/item/:id/add', isLogin, cartItemAdd);
router.get('/cart', isLogin, cartView);
router.post('/cart', isLogin, cartView);

// Exportamos la ruta 

module.exports = router; 