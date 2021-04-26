//const arr = new Array(10);

let videoJuegos = ['Mario3', 'Megaman', 'Chrono triger'];

console.log({ videoJuegos });

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fer',
    function() {},
    () => {},
    { a: 1 },
    ['X', 'MEGAMAN', 'ZERO', ]
];

console.log({ arregloCosas });



//arreglos parte dos


let juegos = ['zelda', 'Mario', "megaman", "mortal kombat"];

console.log('Largo:', juegos.length);

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
})

let nuevalongitud = juegos.push('F-ZERO'); //agrega elemento
console.log('nuevalongitud', nuevalongitud);

nuevalongitud = juegos.unshift('Fire'); //agrwgae un elemento al inicio

console.log({ nuevalongitud, juegos });

//borrrar un elemento que se encuentra al final


juegos.pop();

let juegoBorrado = juegos.pop();

console.log({ juegoBorrado, juegos });

//borrar una variable en especifico

let pos = 1;

console.log({ juegos });
let juegosBorrados = juegos.splice(pos, 2); //borra elementos y regresa en un nuevo arreglo los elementos borrados
console.log({ juegosBorrados, juegos });

let metroIndex = juegos.indexOf('megaman'); //busca un elemento

console.log({ metroIndex });