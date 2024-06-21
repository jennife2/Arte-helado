// script.js

let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio, saborId) {
    const sabor = document.getElementById(saborId).value;
    carrito.push({ nombre, precio, sabor });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} (${item.sabor}) - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}
