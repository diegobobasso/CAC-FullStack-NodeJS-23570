const fs = require('fs');

const dataPath = './src/data/products.json';

const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error.message);
    return [];
  }
};

const writeData = (data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(dataPath, jsonData, 'utf-8');
    console.log('Archivo JSON actualizado correctamente.');
  } catch (error) {
    console.error('Error al escribir en el archivo JSON:', error.message);
  }
};

module.exports = {

  getAllData: () => {
    const data = readData();
    return data;
  },

  getDataById: (id) => {
    const data = readData();

    let index = {};
    
    data.forEach(item => {
      if(item.product_id === parseInt(id)) {
        index = item;
      }
    });
    console.log(index);
    return index;
  
  },
  
  postData: (req) => {
    
      const data = readData();

      const newProduct = {
        product_id: data.length + 1,        
        licence_name: req.body.licence_name,
        category_name: req.body.category_name,
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_price: req.body.product_price,
        dues: req.body.dues,
        product_sku: req.body.product_sku,
        img_front: req.body.files.length > 0 ? 'multimedia/upload_img/' + req.body.files[0] : null,
        img_back: req.body.files.length > 1 ? 'multimedia/upload_img/' + req.body.files[1] : null
      };

    data.push(newProduct);
    writeData(data);
    console.log( 'Datos agregados correctamente :   ', newProduct );
  },

  updateData: (req) => {
    
    const data = readData();
    const product_id = req.body.product_id;
    let index = {};
    
    data.forEach(item => {
      if(item.product_id === parseInt(product_id)) {
        index = item;
      }
    });

    const updatedData = {
      product_id: parseInt(req.body.product_id),        
      licence_name: req.body.licence_name,
      category_name: req.body.category_name,
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_price: req.body.product_price,
      dues: req.body.dues,
      product_sku: req.body.product_sku,
      img_front: index.img_front,
      img_back: index.img_back
    };

    
    
    if (index != {}) {
      data[parseInt(index.product_id)-1] = updatedData;
      writeData(data);
      console.log('Datos actualizados correctamente' );
      return 1;
    } else {
      console.log('ID no encontrado');
      return -1;
    }
  },

  deleteData: (req) => {
    const {id} = req.params;
    const data = readData();

    let newData = [];
    data.forEach(item => {
      if(item.product_id !== parseInt(id)) {
        item.product_id = newData.length + 1;
        newData.push(item);
        
      }
    });

    if (newData.length < data.length) {
      writeData(newData);
      console.log(`Datos eliminados correctamente`);
      return 1;
    } else {
      console.log('ID no encontrado');
      return -1;
    }
  }
};

