const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;


horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado a las ${horaApertura}`;

console.log({ horaApertura, mensaje });


const nota = 65;
grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
    nota >= 85 ? 'B+' :
    nota >= 80 ? 'B+' :
    nota >= 75 ? 'C+' :
    nota >= 70 ? 'C' :
    'F';

console.log({ nota, grado });