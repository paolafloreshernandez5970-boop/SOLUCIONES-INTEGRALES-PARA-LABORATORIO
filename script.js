function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion-contenido');
    secciones.forEach(s => s.style.display = 'none');

    const detalles = document.querySelectorAll('.seccion-detalle');
    detalles.forEach(d => d.style.display = 'none');

    document.getElementById(id).style.display = 'block';
    window.scrollTo(0, 0);
}

function mostrarDetalle(id) {
    document.getElementById('productos').style.display = 'none';
    document.getElementById(id).style.display = 'block';
    window.scrollTo(0, 0);
}

window.onload = function () {
    mostrarSeccion('inicio');
};

function enviarFormulario() {
    const nom = document.getElementById('nombre').value;
    const msg = document.getElementById('mensaje').value;
    const tel = "522212351110";
    if (!nom) { alert("Por favor escribe tu nombre"); return; }
    const texto = `Hola, soy ${nom}. Me interesa: ${msg}`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(texto)}`, '_blank');
}