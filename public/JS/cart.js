
function actualizarTotalProducto(idIndex) {
  const cantidad = document.querySelector(`#cantidad${idIndex}`);
  const precioUnitario = document.querySelector(`#precioProducto${idIndex}`);
  const subtotalProducto = document.querySelector(`#subtotalProducto${idIndex}`);

  let cantidadProducto = Number(cantidad.value);
  let precioProducto = Number(precioUnitario.getAttribute('value'));
  let subtotal = cantidadProducto * precioProducto
  
  subtotalProducto.textContent = subtotal.toString();

  actualizarResumenCarrito();
}

function actualizarResumenCarrito() {
  
const cantidadProductos = document.querySelector('#cantidadProductos');
const subtotalFactura = document.querySelector('#subtotalFactura');
const envio = document.querySelector('#envio');
const totalFactura = document.querySelector('#totalFactura');

const index = Number(document.querySelector('#index').getAttribute('value'));

let cantidadTotalProductos = 0;
let subtotal = 0;

for(let idIndex = 0; idIndex < Number(index); idIndex++ ) {

  const cantidad = document.querySelector(`#cantidad${idIndex}`).getAttribute('value');
  const subtotalProducto = document.querySelector(`#subtotalProducto${idIndex}`).getAttribute('value');

  cantidadTotalProductos += Number(cantidad);
  
  subtotal += Number(subtotalProducto);

}

  cantidadProductos.textContent = cantidadTotalProductos.toString();
  subtotalFactura.textContent = subtotal.toString() 
  let precioEnvio = 1000
  envio.textContent =+ precioEnvio.toString();
  let total = subtotal + precioEnvio;
  totalFactura.textContent = total.toString();

}

function suma(idIndex) {
  const cantidad = document.querySelector(`#cantidad${idIndex}`);
  
  cantidad.value = Number(cantidad.value) + 1;

  actualizarTotalProducto(idIndex);  
}

function resta(idIndex) {
  const cantidad = document.querySelector(`#cantidad${idIndex}`);
  
  cantidad.value = Number(cantidad.value) === 0 ? 0 : Number(cantidad.value) - 1
  
  actualizarTotalProducto(idIndex);  
}

function actualizarCantidad(idIndex) {
  const cantidad = document.querySelector(`#cantidad${idIndex}`);
  
  cantidad.value = Number(cantidad.value) < 0 ? 0 : Number(cantidad.value);
  
  actualizarTotalProducto(idIndex);  
}
