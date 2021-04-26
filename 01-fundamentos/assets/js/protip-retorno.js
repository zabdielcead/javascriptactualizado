const crearPersona = (nombre, apellido) => {
    // return {
    //     nombre: nombre,
    //     apellido: apellido
    // }
    // esto es igual a esto 

    return {
        nombre,
        apellido
    }

}


const persona = crearPersona('CARLOS', 'ARTEAGA');


console.log({ persona });



function imprimeArgumentos() {
    console.log(arguments);
}


imprimeArgumentos(10, true, false, 'Fernando');


const imprimeArgumentos2 = (...args) => { //parametro rest  le llegan todos los argumentos y los conjunta en un array
    console.log(args);
}

imprimeArgumentos2(10, true, false, 'jos', 'Hola');


const imprimeArgumentos3 = (edad, ...args) => { //parametro rest  le llegan todos los argumentos y los conjunta en un array
    console.log(edad, args);
}

imprimeArgumentos3(10, true, false, 'jos', 'Hola');



const imprimeArgumentoss4 = (edad, ...args) => {
    return args;


}


const [casado, vivo, nombreArgs, saludo] = imprimeArgumentoss4(10, true, false, 'fernando', 'hola');

console.log({ casado, vivo, nombreArgs, saludo });

const { apellido } = crearPersona('CAED', 'ARTEAGA');

console.log(apellido);


const { apellido: apellidoRename } = crearPersona('CAED', 'ARTEAGA');

console.log(apellidoRename);


const tonyStarks = {
    nombre: 'TONY STARK',
    codeName: 'Iron man',
    vivo: false,
    edad: 20,
    trajes: ['Mark I', 'MARK V', 'HULKBUSTER']
}


// const imprimePropiedadesx = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);

// }

// esto se sustituye por esto
const imprimePropiedadesx = ({ nombre, codeName, vivo, edad = 15, trajes }) => { // edad = 15 edad por defecto
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });

}



imprimePropiedadesx(tonyStarks);