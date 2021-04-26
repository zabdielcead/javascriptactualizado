function saludar(nombre) {
    console.log(arguments);
    console.log('Hola' + nombre);
    return 1;
}


const saludar2 = function() { // funcion anonima
    console.log('Hola Mundo');
}


const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola Flecha' + nombre);
}

saludar2();
const retorno = saludar('Fernando', 40, true, 'Costa Ricas');
console.log({ retorno });
saludarFlecha();
saludarFlecha2('cead');