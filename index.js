const express = require("express");
const cors = require("cors")
const path = require("path");

const app = express();

const port = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// Rutas

const mainRoutes = require("./src/Routes/mainRoutes");
const adminRoutes = require("./src/Routes/adminRoutes");
const shopRoutes = require("./src/Routes/shopRoutes");
const authRoutes = require('./src/Routes/authRoutes');

const { notFoundPage } = require('./src/error/errorHandlers');

app.use(express.static(path.join(__dirname, "public")));

// configuramos nuestro motor de vistas y su carpeta
app.set ("views",path.join(__dirname,"views"));
app.set ("view engine", "ejs");

// Definir las rutas

app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use('/auth', authRoutes);

app.use(notFoundPage);

app.listen(port, () => {
  console.log(`Servidor OK en el puerto ${port}`);
});
