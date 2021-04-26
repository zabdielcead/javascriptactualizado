let personajeObjLiteral = {
    nombre: 'Tony',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.04,
        lng: -118.70
    },
    trajes: ['MARK', 'MARK2'],
    direccion: {
        zip: '10880',
        ubicacion: 'Malibu ca'
    }
}

console.log('Nombre', personajeObjLiteral.nombre);
console.log('Nombre', personajeObjLiteral['nombre']);
console.log('coords', personajeObjLiteral.coords);
console.log('trajes', personajeObjLiteral.trajes.length);


const x = 'vivo';

console.log('vivo', personajeObjLiteral[x]);

// si queremos borrar una propiedad personajeObjLiteral por ejemplo la edad es con delete

console.log('antes de borrar', personajeObjLiteral);

delete personajeObjLiteral.edad;

console.log('despues de borrar', personajeObjLiteral);

personajeObjLiteral.casado = true;
const entriesPares = Object.entries(personajeObjLiteral);

console.log(entriesPares);


Object.freeze(personajeObjLiteral) //no permite cambiar el objeto una ves que pasa por esta instruiccion

personajeObjLiteral.casado = false;

//pero un objeto dentro del objeto si se puede modificar
personajeObjLiteral.direccion.ubicacion = 'Costa Rica'

console.log(personajeObjLiteral);

const propiedadesObjeto = Object.getOwnPropertyNames(personajeObjLiteral); // obtiene las llaves del objto

console.log(propiedadesObjeto);


const valoresObjeto = Object.values(personajeObjLiteral);
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
console.log(valoresObjeto);