function datos() {
    let titulo;
    let pepe = {};

    let patron = /[,;·$%&\/()=?¿<>:!¡+]/i;
    do {
        titulo = prompt("Introduzca un nuevo título: ");
    } while (patron.test(titulo) || titulo === null || titulo === undefined);
    document.getElementById("Titulo").innerHTML = titulo;

    patron = /[0-9.,;·$%&\/()=?¿<>:!¡+]/i;
    do {
        pepe.nombre = prompt("Introduzca el nombre del Usuario: ");
    }while (patron.test(pepe.nombre) || pepe.nombre === null || pepe.nombre === undefined);

    do {
        pepe.apellido1 = prompt("Introduce el primer apellido del Usuario: ");
    }while  (patron.test(pepe.apellido1) || pepe.apellido1 === null || pepe.apellido1 === undefined);

    //let patron2 = /a-zA-Z.,;·$%&\()=?¿<>:!¡+/; !patron2.test(fechNaci) &&
    do {
        pepe.fechNaci = prompt("Introduzca la fecha de nacimiento del Usuario: ");
    }while (pepe.fechNaci === null && pepe.fechNaci === undefined);

    do {
        pepe.lugarResu = prompt("Introduzca el lugar de residencia del Usuario: ");
    }while (patron.test(pepe.lugarResu) || pepe.lugarResu === null || pepe.lugarResu === undefined);

    for (let prop in pepe) {
        document.getElementById("mostrarDatos").innerHTML += pepe[prop] + "\n";
    }
}