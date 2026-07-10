// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("contact-form");

    const nombre = document.getElementById("name");
    const email = document.getElementById("email");
    const telefono = document.getElementById("phone");
    const mensaje = document.getElementById("message");

    const contador = document.getElementById("contador");

    const mensajeExito = document.getElementById("success-message");

    // ==========================
    // Contador de caracteres
    // ==========================

    mensaje.addEventListener("input", function () {

        contador.textContent = mensaje.value.length + " / 500 caracteres";

    });

    // ==========================
    // Envío del formulario
    // ==========================

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        // Ocultar mensaje anterior
        mensajeExito.style.display = "none";

        // Validar nombre
        if (nombre.value.trim() === "") {

            alert("El nombre es obligatorio.");

            nombre.focus();

            return;

        }

        // Validar email
        const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresionEmail.test(email.value)) {

            alert("Introduce un email válido.");

            email.focus();

            return;

        }

        // Validar teléfono (opcional)
        if (telefono.value.trim() !== "") {

            const expresionTelefono = /^\+?[0-9 ]+$/;

            if (!expresionTelefono.test(telefono.value)) {

                alert("El teléfono no es válido.");

                telefono.focus();

                return;

            }

        }

        // Validar mensaje
        if (mensaje.value.trim() === "") {

            alert("El mensaje es obligatorio.");

            mensaje.focus();

            return;

        }

        // Mostrar éxito
        mensajeExito.style.display = "block";

        // Limpiar formulario
        formulario.reset();

        contador.textContent = "0 / 500 caracteres";

    });

});