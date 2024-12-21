/* Precio base */
const precio = 4000;

/* Query selector del DOM */
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

/* Valores en 0 */
let cantidad = 0;
precioSpan.innerHTML = precio;
totalSpan.innerHTML = 0;

/* Función para actualizar el total */ 
const actualizarTotal = () => {
  const total = cantidad * precio;
  totalSpan.innerHTML = total;
};

/* Función para incrementar la cantidad */
const incrementarCantidad = () => {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  /* llama a la funcion actualizar total */
  actualizarTotal();
};

/* Función para disminuir la cantidad */
const disminuirCantidad = () => {
  if (cantidad > 0) { 
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    /* llama a la funcion actualizar total */
    actualizarTotal();
  }
};
