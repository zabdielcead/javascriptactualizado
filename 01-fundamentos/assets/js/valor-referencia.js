let a = 10;
let b = a;

console.log({ a, b });
/**
 En javascript todos los objetos son pasados por referencia
 */
let juan = { nombre: 'Juan' };
//let ana = juan;  // la siguiente linea es para independizar los objetos rompe la referencia en javascript
let ana = {...juan };
ana.nombre = 'Ana';

ana.nombre = 'Ana';
console.log({ juan, ana });


const cambiaNombre = ({...persona }) => { // para separar la referencia y que sea independiente operador spread
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);


console.log({ peter, tony });

const frutas = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });