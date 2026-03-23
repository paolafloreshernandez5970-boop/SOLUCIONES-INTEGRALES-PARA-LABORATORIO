function mostrarSeccion(idSeccion) {
    // 1. Ocultamos SOLO el catálogo de tarjetas
    document.getElementById('productos').style.display = 'none';

    // 2. Ocultamos todas las secciones de tablas de precios por seguridad
    const detalles = document.querySelectorAll('.seccion-detalle');
    detalles.forEach(sec => {
        sec.style.display = 'none';
    });

    // 3. Mostramos la tabla que el usuario eligió
    const seccionElegida = document.getElementById(idSeccion);
    if (seccionElegida) {
        seccionElegida.style.display = 'block';
    }

    // 4. Subimos la pantalla para ver el inicio de la tabla
    window.scrollTo(0, 0);
}

function volverAlCatalogo() {
    // 1. Ocultamos cualquier tabla de detalles abierta
    const detalles = document.querySelectorAll('.seccion-detalle');
    detalles.forEach(sec => {
        sec.style.display = 'none';
    });

    // 2. Mostramos el catálogo de tarjetas de nuevo
    document.getElementById('productos').style.display = 'block';
}

// Función para el botón del formulario de contacto
function enviarFormulario() {
    // 1. Obtenemos los datos que el cliente escribió
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const telefonoVentas = "522212351110"; // Tu número con el código de país (52 para México)

    // 2. Validación básica
    if (nombre === "" || email === "") {
        alert("Por favor, completa al menos tu nombre y correo para poder contactarte.");
        return;
    }

    // 3. Creamos el mensaje que te llegará a ti
    const textoWhatsApp = `Hola, mi nombre es *${nombre}* de la empresa/particular: %0A` +
        `📧 Mi correo: ${email} %0A` +
        `📝 Necesito cotización de: ${mensaje}`;

    // 4. Construimos el enlace de WhatsApp
    const url = `https://wa.me/${telefonoVentas}?text=${textoWhatsApp}`;

    // 5. Abrimos WhatsApp en una pestaña nueva
    window.open(url, '_blank');

    // 6. Opcional: Limpiar el formulario
    document.getElementById('form-cotizacion').reset();
}