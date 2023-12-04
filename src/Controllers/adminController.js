const modelo = require("../utiles/itemServices"); // Importamos el controlador del modelo

const adminView = async (req, res) => {
  const articulos = await modelo.getAllData();
  res.render("admin", {
    title: "Administración - FunkoShop",
    articulos: articulos,
  });
};

const adminFind = async (req, res) => {
  let articulos = [];
  let { clave } = req.body;
  let claveRegex = new RegExp(clave, "i");
  const todos = await modelo.getAllData();

  console.log(req.body);
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
    res.render("admin", {
      title: "Administración - FunkoShop",
      articulos: articulos,
    });
  }
  res.render("admin", {
    title: "Administración - FunkoShop",
    articulos: articulos,
  });
};

const editView = async (req, res) => {
  let { id } = req.params;
  console.log(id);

  const item = await modelo.getDataById(id); // Busca un registro por Id

  if (item == {}) {
    const articulos = await modelo.getAllData();
    res.render("admin", {
      title: "Administracion - FunkoShop",
      articulos: articulos,
    });
  }
  res.render("edit", { title: `Edit Item #${id} - FunkoShop`, item: item });
};

const editUpdate = async (req, res) => {
  console.log(req.params);
  console.log(req.body);

  const result = await modelo.updateData(req);

  if (result) {
    const articulos = await modelo.getAllData();
    res.render("admin", {
      title: "Administracion - FunkoShop",
      articulos: articulos,
    });
  }
};

const createView = (req, res) => {
  res.render("create", { title: "Crear Item" });
};

const createItem = async (req, res) => {
  console.log(req.body)
  console.log(req.files)
  await modelo.postData(req);

  const articulos = await modelo.getAllData();
  res.render("admin", {
    title: "Administración - FunkoShop",
    articulos: articulos
  });
};

const deleteView = async (req, res) => {
  const { id } = req.params;
  const item = await modelo.getDataById(id);
  res.render("delete", { title: `Delete Item #${id}`, item: item });
};

const deleteItem = async (req, res) => {
  modelo.deleteData(req);
  const { id } = req.params;
  console.log(id);

  const articulos = await modelo.getAllData();
  res.render("admin", {
    title: "Administracion - FunkoShop",
    articulos: articulos,
  });
};

module.exports = {
  adminView,
  adminFind,
  editView,
  editUpdate,
  createView,
  createItem,
  deleteView,
  deleteItem,
};
