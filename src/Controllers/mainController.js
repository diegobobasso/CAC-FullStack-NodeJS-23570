const modelo = require("../utiles/itemServices"); // Importamos el controlador del modelo
const indexServices = require("../utiles/indexServices");

const mainController = async (req, res) => {

   const relacionados = await modelo.getAllData();
   res.render('index', {title: "Home - FunkoShop", relacionados:relacionados, tituloSlider:"ULTIMOS LANZAMIENTOS"});
}


module.exports = {mainController};

