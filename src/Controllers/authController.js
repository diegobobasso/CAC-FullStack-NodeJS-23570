const modelo = require('../utiles/itemServices'); // Importamos el controlador del modelo
const userModel = require('../utiles/userServices');
const cartModel = require('../utiles/cartServices');
const bcryptjs = require('bcryptjs');


// carga la vista login
const loginView = (req, res) => {
  res.render('login', { 
    title: 'Login - FunkoShop', 
    message: " " 
  });
};

// carga la vista login
const loginUser = async (req, res) => {
  
  const {email} = req.body;         // recuperamos email y password
  const {password} = req.body;
  
  if (email === undefined) {  // si los datos son undefined vuelve
    return res.render('login', { 
      title: 'Login - FunkoShop', 
      message: 'Ingrese usuario y/o password.' 
    });  
  }

  const user = await userModel.getDataByEmail(email);  // buscamos el email

  if(user.email !== undefined) { // si lo encuentra   
  
    if (bcryptjs.compareSync(password, user.password)) {   // compara el password y si es verdarero
      console.log('Usuario validado correctamente!');  
      req.session.user = email;             // guardamos el usuario
      console.log(req.session);         // linea de depuración
      return res.redirect('/');         
    }
    
  }
  
  // si es falso
  res.render('login', { 
    title: 'Login - FunkoShop', 
    message: 'Usuario y/o password incorrectos!' 
  });
  
}

// carga la vista register
const registerView = (req, res) => {
  res.render('register', { 
    title: 'Register - FunkoShop', 
    message: ' ' 
  });
};

// registra un nuevo usuario
const registerUser = async (req, res) => {
  
  const {email} = req.body;  // recuperamos el email 
  
  const user = await userModel.getDataByEmail(email); // buscamos si ya esta registrado
  
  if(user.email !== undefined) {      // si lo encuentra muestra el error
    return res.render('register', { 
      title: 'Register - FunkoShop', 
      message: 'Error: Usuario ya registrado.' 
    });
  }   
  
  const result = await userModel.postData(req);   // inserta en nuevo registro
  let carrito = await cartModel.postNewCart(email); // crea un carrito para el
                                                  // nuevo usuario
  res.render('login', { 
    title: 'Login - FunkoShop', 
    message: " " 
  });
}

// en un logout carga la vista raiz
const logout = async (req, res) => {
  req.session.destroy();
  
  const relacionados = await modelo.getAllData(); // busca articulos. hay que cambiar la base de datos para
                                                   // buscar los nuevos
  res.render('index', {
    title: 'Home - FunkoShop',
    relacionados: relacionados,
    tituloSlider: 'ULTIMOS LANZAMIENTOS',
  });
};

module.exports = {
  loginView,
  loginUser,
  registerView,
  registerUser,
  logout,
};
