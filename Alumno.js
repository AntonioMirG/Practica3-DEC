class Alumno {
    constructor(nombre, apellido1, apellido2, fechaNacimiento, estudios, curso, telefono) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.fechaNacimiento = fechaNacimiento;
        this.estudios = estudios;
        this.curso = curso;
        this.telefono = telefono;
    }

    muestra() {

        return(
            "Nombre: " + this.nombre + "\n" +
            "Apellidos: " + this.apellido1 + " " + this.apellido2 + "\n" +
            "Fecha de nacimiento: " + this.fechaNacimiento + "\n" +
            "Nivel de estudios: " + this.estudios + "\n" +
            "Curso: " + this.curso + "\n" +
            "Teléfono: " + this.telefono
        );
    }
}

//////////////////////////////Validaciones//////////////////////////////

function validarNombre(nombre) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(nombre.trim());
}

function validarApellido(apellido) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/.test(apellido.trim());
}

function esFechaValida(fecha) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (!regex.test(fecha)) return false;

    const [dia, mes, anio] = fecha.split('/').map(Number);
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (hoy.getMonth() < mes - 1 || (hoy.getMonth() === mes - 1 && hoy.getDate() < dia)) edad--;

    return edad >= 18;
}

function validarTelefono(telefono) {
    return /^\d{9}$/.test(telefono);
}
//////////////////////////////////////////////////////////////////////


///////////////////////Verificacion del Formulario////////////////////

function verificarFormulario() {

    const nombre = document.getElementById("nombre").value;

    const apellido1 = document.getElementById("apellido1").value;

    const apellido2 = document.getElementById("apellido2").value;

    const fecha = document.getElementById("fecha").value;

    const estudios = document.getElementById("estudios").value;

    const curso = document.getElementById("curso").value;

    const telefono = document.getElementById("telefono").value;

    if (!validarNombre(nombre)) {

        mostrarModal("Error en el nombre. No puede estar vacío y no debe contener números.");
        
        return;
    }
    if (!validarApellido(apellido1)) {

        mostrarModal("Error en el primer apellido. No puede estar vacío y no debe contener números.");

        return;
    }
    if (!validarApellido(apellido2)) {

        mostrarModal("Error en el segundo apellido. No debe contener números.");

        return;
    }
    if (!esFechaValida(fecha)) {

        mostrarModal("Error en la fecha. Debe estar en el formato DD/MM/AAAA y ser mayor de edad.");

        return;
    }
    if (estudios.trim() === "") {

        mostrarModal("Error en los estudios. Debe seleccionar un valor.");

        return;
    }
    if (curso.trim() === "") {

        mostrarModal("Error en el curso. Debe seleccionar un valor.");

        return;
    }
    if (!validarTelefono(telefono)) {

        mostrarModal("Error en el teléfono. Debe ser un número válido de 9 cifras.");

        return;
    }

    document.getElementById("botonRegistrar").disabled = false;
}

///////////////////////Abrir y cerrar ventana modal////////////////////


function mostrarModal(mensaje) {

    document.getElementById("mensajeError").textContent = mensaje;

    document.getElementById("modal").style.display = "block";
}

function cerrarVentana() {

    document.getElementById("modal").style.display = "none";

}

//////////////////////////////////////////////////////////////////////



///////////////////////Enviar Formulario////////////////////

function enviarFormulario() {

    const nombre = document.getElementById("nombre").value;

    const apellido1 = document.getElementById("apellido1").value;

    const apellido2 = document.getElementById("apellido2").value;

    const fecha = document.getElementById("fecha").value;

    const estudios = document.getElementById("estudios").value;

    const curso = document.getElementById("curso").value;

    const telefono = document.getElementById("telefono").value;

    const alumno = new Alumno(nombre, apellido1, apellido2, fecha, estudios, curso, telefono);

    alert(alumno.muestra());
}

//////////////////////////////////////////////////////////////////////

document.querySelectorAll("#formulario input, #formulario select").forEach(input => {

    input.addEventListener("blur", verificarFormulario);
    
});

