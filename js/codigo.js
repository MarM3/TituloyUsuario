function datos() {
    let titulo = prompt("Introduce el título de la página: ");

    let pepe = {};

    let patron = /[,;·$%&\/()=?¿<>:!¡+]/i;
    if (!patron.test(titulo) && titulo !== null && titulo !== undefined) {
        document.getElementById("Titulo").innerHTML = titulo;
    } else {
        titulo = prompt("Introduzca un nuevo título: ");
    }

    patron = /[0-9.,;·$%&\/()=?¿<>:!¡+]/i;
    pepe.nombre = prompt("Introduce el nombre del Usuario: ");
    if (pepe.nombre === null && pepe.nombre === undefined) {
        pepe.nombre = prompt("Introduzca un nuevo nombre: ");
    }
    pepe.apellido1 = prompt("Introduce el primer apellido del Usuario: ");
    if (!patron.test(pepe.apellido1) && pepe.apellido1 === null && pepe.apellido1 === undefined) {
        pepe.apellido1 = prompt("Introduzca, de nuevo, el apellido: ");
    }
    pepe.fechNaci = prompt("Introduzca la fecha de nacimiento del Usuario: ");
    //let patron2 = /a-zA-Z.,;·$%&\()=?¿<>:!¡+/; !patron2.test(fechNaci) &&
    if (pepe.fechNaci === null && pepe.fechNaci === undefined) {
        pepe.fechNaci = prompt("Introduzca, de nuevo, la fecha de nacimiento: ");
    }
    pepe.lugarResu = prompt("Introduzca el lugar de residencia del Usuario: ");
    if (pepe.lugarResu === null && pepe.lugarResu === undefined) {
        pepe.lugarResu = prompt("Introduzca, de nuevo, el lugar de residencia: ");
    }

    for (let prop in pepe) {
        document.getElementById("mostrarDatos").innerHTML += pepe[prop] + "\n";
    }
}