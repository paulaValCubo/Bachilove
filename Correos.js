document.getElementById("correoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const asunto = document.getElementById("asunto").value;
    const texto = document.getElementById("texto").value;

    // Mostrar resultados
    document.getElementById("out-nombre").textContent = nombre;
    document.getElementById("out-asunto").textContent = asunto;
    document.getElementById("out-texto").textContent = texto;

    console.log("\n-Datos del correo guardados-");
    console.log("Remitente: " + nombre);
    console.log("Asunto: " + asunto);
    console.log("Mensaje: " + texto);
});
