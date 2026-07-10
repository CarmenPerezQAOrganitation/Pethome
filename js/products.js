// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", cargarProductos);

let todosLosProductos = [];

// ==============================
// Cargar productos
// ==============================

async function cargarProductos() {

    try {

        const respuesta = await fetch("data/products.json");

        todosLosProductos = await respuesta.json();

        mostrarProductos(todosLosProductos);

    }

    catch(error){

        console.error(error);

    }

}

// ==============================
// Mostrar productos
// ==============================

function mostrarProductos(listaProductos){

    const contenedor = document.getElementById("products-container");

    contenedor.innerHTML = "";

    if(listaProductos.length === 0){

        contenedor.innerHTML = "<h2>No se encontraron productos.</h2>";

        return;

    }

    listaProductos.forEach(producto=>{

        const tarjeta = document.createElement("article");

        tarjeta.className = "product-card";

        tarjeta.innerHTML = `

            <img src="images/${producto.image}" alt="${producto.name}">

            <div class="product-info">

                <h3>${producto.name}</h3>

                <p>${producto.category}</p>

                <p class="price">${producto.price.toFixed(2)} €</p>

                <button class="btn">
                    Añadir al carrito
                </button>

            </div>

        `;

        contenedor.appendChild(tarjeta);

    });

}

// ==============================
// Eventos
// ==============================

document.getElementById("btn-filter").addEventListener("click", aplicarFiltros);

// ==============================
// Filtros
// ==============================

function aplicarFiltros(){

    let nombre = document.getElementById("search-name").value.toLowerCase();

    let categoria = document.getElementById("category").value;

    let precioMin = document.getElementById("min-price").value;

    let precioMax = document.getElementById("max-price").value;

    let resultado = todosLosProductos.filter(producto=>{

        let cumpleNombre = producto.name.toLowerCase().includes(nombre);

        let cumpleCategoria = categoria === "" || producto.category === categoria;

        let cumpleMin = precioMin === "" || producto.price >= Number(precioMin);

        let cumpleMax = precioMax === "" || producto.price <= Number(precioMax);

        return cumpleNombre && cumpleCategoria && cumpleMin && cumpleMax;

    });

    mostrarProductos(resultado);

}