const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const cantidad = document.querySelector('#cantidad');

suma.addEventListener('click', () => cantidad.value = Number(cantidad.value) + 1);

resta.addEventListener('click', () => {
  cantidad.value = Number(cantidad.value) === 0
    ? 0
    : Number(cantidad.value) - 1
});

cantidad.addEventListener('change', () => cantidad.value = Number(cantidad.value) < 0 ? 0 : Number(cantidad.value));
