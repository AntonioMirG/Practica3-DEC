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

        console.log(
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
const validarNombre = (nombre) => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(nombre) && nombre.trim() !== '';
const validarApellido1 = (apellido1) => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(apellido1) && apellido1.trim() !== '';
const validarApellido2 = (apellido2) => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/.test(apellido2);
const validarFecha = (fecha) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (!regex.test(fecha)) return false;
    const [dia, mes, anio] = fecha.split('/').map(Number);
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (hoy.getMonth() < mes - 1 || (hoy.getMonth() === mes - 1 && hoy.getDate() < dia)) edad--;
    return edad >= 18;
};

const validarTelefono = (telefono) => /^\d{9}$/.test(telefono);
//////////////////////////////////////////////////////////////////////


////////////////////Verificar formulario////////////////////
function verificarFormulario() {
    const nombre = document.getElementById("nombre").value;

    const apellido1 = document.getElementById("apellido1").value;

    const apellido2 = document.getElementById("apellido2").value;

    const fecha = document.getElementById("fecha").value;

    const estudios = document.getElementById("estudios").value;

    const curso = document.getElementById("curso").value;

    const telefono = document.getElementById("telefono").value;

    const formularioValido = validarNombre(nombre) && validarApellido1(apellido1) &&
        validarApellido2(apellido2) && validarFecha(fecha) &&
        estudios.trim() !== "" && curso.trim() !== "" &&
        validarTelefono(telefono);

    document.getElementById("botoncito").disabled = !formularioValido;
}


////////////////////Enviar formulario////////////////////
function enviarFormulario() {

    const alumno = new Alumno(nombre, apellido1, apellido2, fecha, estudios, curso, telefono);

    alumno.muestra();

    document.getElementById("modal").style.display = "flex";
}

////////////////////Cerrar ventana////////////////////
function cerrarVentana() {

    document.getElementById("modal").style.display = "none";
}

document.getElementById("formulario").addEventListener("input", verificarFormulario);
