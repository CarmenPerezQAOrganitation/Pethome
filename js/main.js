// Esperar a que cargue toda la página
document.addEventListener("DOMContentLoaded", cargarProductos);

// Función principal
async function cargarProductos() {

    try {

        // Leer el archivo JSON
        const respuesta = await fetch("data/products.json");

        const productos = await respuesta.json();

        // Contenedor donde se mostrarán los productos
        const contenedor = document.getElementById("featured-products");

        // Mostrar únicamente los 4 primeros
        const destacados = productos.slice(0, 4);

        destacados.forEach(producto => {

            const tarjeta = document.createElement("article");

            tarjeta.classList.add("product-card");

            tarjeta.innerHTML = `
                <img src="images/${producto.image}" alt="${producto.name}">

                <div class="product-info">

                    <h3>${producto.name}</h3>

                    <p>${producto.category}</p>

                    <p class="price">${producto.price.toFixed(2)} €</p>

                    <button class="btn">
                        Ver producto
                    </button>

                </div>
            `;

            contenedor.appendChild(tarjeta);

        });

    }

    catch(error){

        console.error("Error al cargar los productos:", error);

    }

}