const modelo = require("../utiles/itemServices"); // Importamos el controlador del modelo

const shopView = async (req, res) => {
  const articulos = await modelo.getAllData();
  res.render("shop", { title: "Shop - FunkoShop", articulos: articulos });
};

const shopFind = async (req, res) => {
  let articulos = [];
  let { clave } = req.body;

  let claveRegex = new RegExp(clave, "i");
  const todos = await modelo.getAllData();

  console.log(req.body); // linea de depuracion
  todos.forEach((articulo) => {
    if (
      claveRegex.test(articulo.licence_name) ||
      claveRegex.test(articulo.product_name)
    ) {
      articulos.push(articulo);
    }
  });

  if (articulos.length == 0) {
    articulos = todos;
    res.render("shop", { title: "Shop - FunkoShop", articulos: articulos });
  }
  res.render("shop", { title: "Shop - FunkoShop", articulos: articulos });
};

const itemView = async (req, res) => {
  let { id } = req.params;
  let relacionados = [];
  let tituloSlider;
  console.log(id);

  const item = await modelo.getDataById(id); // Busca un registro por id
  const articulos = await modelo.getAllData();
  console.log(item);
  articulos.forEach((articulo) => {
    if (
      articulo.licence_name == item.licence_name &&
      articulo.product_id != item.product_id
    ) {
      relacionados.push(articulo);
    }
    tituloSlider = "PRODUCTOS RELACIONADOS";
  });

  if (relacionados.length < 1) {
    relacionados = articulos;
    tituloSlider = "MÁS PRODUCTOS COLECCIONABLES";
  }
  res.render("item", {
    title: `Item #${item.product_id} - FunkoShop`,
    item: item,
    relacionados: relacionados,
    tituloSlider: tituloSlider,
  });
};

const cartView = (req, res) => {
  res.render("cart", { 
    title: "Carrito - FunkoShop" 
  });
};

module.exports = {
  shopView,
  shopFind,
  itemView,
  cartView,
};
