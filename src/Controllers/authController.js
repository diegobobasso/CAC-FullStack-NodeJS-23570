const modelo = require("../utiles/itemServices"); // Importamos el controlador del modelo

const login = (req, res) => {
  res.render("login", { title: "Login - FunkoShop" });
};

const register = (req, res) => {
  res.render("register", { title: "Register - FunkoShop" });
};

const logout = async (req, res) => {
  const relacionados = await modelo.getAllData();

  res.render("index", {
    title: "Home - FunkoShop",
    relacionados: relacionados,
    tituloSlider: "ULTIMOS LANZAMIENTOS",
  });
};

module.exports = {
  login,
  register,
  logout,
};
