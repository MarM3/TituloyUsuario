function datos() {
    let titulo = prompt("Introduce el título de la página: ");

    let patron = /[,;·$%&\/()=?¿<>:!¡+]/i;
    if (!patron.test(titulo) && titulo !== null && titulo !== undefined) {
        document.getElementById("Titulo").innerHTML = titulo;
    } else {
        titulo = prompt("Introduzca un nuevo título: ");
    }

    patron = /0-9.,;·$%&\/()=?¿<>:!¡+/i;
    let nombre = prompt("Introduce el nombre del Usuario: ");
    if (!patron.test(nombre) && nombre === null && nombre === undefined) {
        nombre = prompt("Introduzca un nuevo nombre: ");
    }
    let apellido1 = prompt("Introduce el primer apellido del Usuario: ");
    if (!patron.test(apellido1) && apellido1 === null && apellido1 === undefined) {
        apellido1 = prompt("Introduzca, de nuevo, el apellido: ");
    }
    let fechNaci = prompt("Introduzca la fecha de nacimiento del Usuario: ");
    //let patron2 = /a-zA-Z.,;·$%&\()=?¿<>:!¡+/; !patron2.test(fechNaci) &&
    if (fechNaci === null && fechNaci === undefined) {
        fechNaci = prompt("Introduzca, de nuevo, la fecha de nacimiento: ");
    }
    let lugarResu = prompt("Introduzca el lugar de residencia del Usuario: ");
    if (!patron.test(lugarResu) && lugarResu === null && lugarResu === undefined) {
        nombre = prompt("Introduzca, de nuevo, el lugar de residencia: ");
    }
}
    function Usuario(parNombre, parApe1, parFechaN, parLugarR) {
        this.nombre = parNombre;
        this.apellido1 = parApe1;
        this.fechNaci = parFechaN;
        this.lugarResu = parLugarR;
    }

    let pepe = new Usuario(nombre, apellido1, fechNaci, lugarResu);
    for (let prop in pepe) {
        document.getElementById("mostrarDatos").innerHTML = prop + "\n";
    }