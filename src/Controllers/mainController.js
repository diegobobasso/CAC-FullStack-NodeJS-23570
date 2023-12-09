const modelo = require('../utiles/itemServices'); // Importamos el controlador del modelo

// controlador de vista raíz, index
const mainController = async (req, res) => {

   const relacionados = await modelo.getAllData(); // busca articulos. hay que cambiar la base de datos para
                                                   // buscar los nuevos
   res.render('index', {title: 'Home - FunkoShop', relacionados:relacionados, tituloSlider:'ULTIMOS LANZAMIENTOS'});
}

const contactController = (req, res) => {
   res.send("Estas en la página de contacto");
}
const aboutController = (req, res) => {
   res.send("Estas en la página de acerca de");
}
const faqsController = (req, res) => {
   res.send("Estas en la página de faqs");
}


module.exports = {
   mainController, 
   contactController, 
   aboutController, 
   faqsController
};

