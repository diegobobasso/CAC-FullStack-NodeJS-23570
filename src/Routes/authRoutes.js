const express = require("express");
const router = express.Router();

const {login, register, logout} = require("../Controllers/authController");

// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', login);

// Ruta para manejar la autenticación
router.post('/login', login);

// Ruta para mostrar el formulario de registro
router.get('/register', register);

// Ruta para manejar el registro
router.post('/register', register);

// Ruta para cerrar sesión
router.get('/logout', logout);

module.exports = router;
