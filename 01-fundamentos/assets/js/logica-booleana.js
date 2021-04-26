const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const soyVacio = '';


const a1 = true && 'Hola Mundo';
const a2 = 'Hola' && 'Mundo';
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyVacio || 'soy vacio';
const a5 = soyFalso || soyNull || soyUndefined || soyVacio || 'No soy ninguno de esto'

console.log({ a1, a2, a3, a4, a5 });